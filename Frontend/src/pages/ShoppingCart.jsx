import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import '../styles/ShoppingCart.css';
import axios from 'axios';

const ShoppingCart = ({ user }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ShoppingCartId, setShoppingCartId] = useState();


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

        const response2 = await axios.get(`http://localhost:8080/TechShop/getcart/${user.id}`);
        console.log(response2.data);
        setShoppingCartId(response2.data);

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
  const handledeleteall = async () => {
    try {
      const response = await axios.delete("http://localhost:8080/TechShop/removeItem");
      console.log("All items removed");
      setProducts([]);
      setTotal(0); // Reset the total to 0
      alert("All items removed successfully!");
    } catch (err) {
      alert("Failed to remove items. Please try again.");
    }
  };
  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/TechShop/removeItem/${id}`);
      console.log(`Item with ID ${id} removed successfully.`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      const newTotal = products
        .filter((product) => product.id !== id)
        .reduce((sum, product) => sum + product.initialQuantity * parseFloat(product.price), 0);
      setTotal(newTotal);
    } catch (err) {
      alert("Failed to remove the item. Please try again.");
    }
  };
  const handleconfirmall = async () => {
    // Prompt the user to enter their phone number
    const phoneNumber = window.prompt("Please enter your phone number to receive the products:");
  
    // Check if the phone number is valid (simple validation for this example)
    if (phoneNumber && /^\d+$/.test(phoneNumber)) {
      try {
        const response = await axios.delete("http://localhost:8080/TechShop/removeItem");
        console.log("All items removed");
  
        // Clear the products array after successful deletion
        setProducts([]);
        setTotal(0); // Reset the total to 0
  
        // Show confirmation message
        alert(`Confirmed successfully! Our Delivery Representative will call you soon.`);
      } catch (err) {
        alert("Failed to remove items. Please try again.");
      }
    } else {
      alert("Please enter a valid phone number.");
    }
  };
  
  

  return ( 
    <div className="cart-container">
      <h2 className="shopping-label">Your Shopping Cart</h2>
      {products.length === 0 ? (
        <h4 style={{ color: 'black' }}>Your cart is empty.</h4>

      ) : (
        products.map((product) => (
          <Cart
            key={product.id} // Use `id` as the key
            id={product.id} 
            name={product.name}
            image={product.photo}
            price={product.price}
            initialQuantity={product.initialQuantity}
            onQuantityChange={(change) => handleQuantityChange(product.id, change)}
            onRemove={() => handleRemoveItem(product.id)}
          />
        ))
      )}
      <div className="Total-amount">
        
        <button className="confirmation-button" onClick={handleconfirmall} >Confirm</button>
        <button className="confirmation-button" onClick={handledeleteall}>Remove All</button>
        <button className="total-price-button">Total: {total} LE</button>
      </div>
    </div>
  );
};

export default ShoppingCart;