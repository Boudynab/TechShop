import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import '../styles/ShoppingCart.css';
import axios from 'axios';

const ShoppingCart = ({ user }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!user || !user.id) {
          setError('User ID is not available');
          setLoading(false);
          return;
        }
        const response = await axios.get(`http://localhost:8080/TechShop/getCart/${user.id}`);
        const productsWithQuantity = response.data.map((product) => ({
          ...product,
          initialQuantity: 1, // Default quantity
        }));
        setProducts(productsWithQuantity);
        setLoading(false);

        // Calculate the initial total
        const initialTotal = productsWithQuantity.reduce(
          (sum, product) => sum + product.initialQuantity * parseFloat(product.price),
          0
        );
        setTotal(initialTotal);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [user]);

  // Update total when products change
  useEffect(() => {
    const newTotal = products.reduce(
      (sum, product) => sum + product.initialQuantity * parseFloat(product.price),
      0
    );
    setTotal(newTotal);
  }, [products]);

  // Handle quantity changes
  const handleQuantityChange = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, initialQuantity: Math.max(1, product.initialQuantity + change) }
          : product
      )
    );
  };

  if (loading) {
    return <div className="cart-container">Loading...</div>;
  }
  if (error) {
    return <div className="cart-container">Error: {error}</div>;
  }

  return ( 
    <div className="cart-container">
      <h2 className="shopping-label">Your Shopping Cart</h2>
      {products.length === 0 ? (
        <h4 style={{ color: 'black' }}>Your cart is empty.</h4>

      ) : (
        products.map((product) => (
          <Cart
            key={product.id}
            name={product.name}
            image={product.photo}
            price={product.price}
            initialQuantity={product.initialQuantity}
            onQuantityChange={(change) => handleQuantityChange(product.id, change)}
          />
        ))
      )}
      <div className="Total-amount">
        
        <button className="confirmation-button">Confirm</button>
        <button className="total-price-button">Total: {total} LE</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
