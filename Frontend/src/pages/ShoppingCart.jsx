import React, { useState,useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import pc from '../assets/images/pc.jfif';
import Cart from '../components/Cart';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, title: 'hamada', price: 3000, initialQuantity: 1 },
    { id: 2, title: 'hamada', price: 30, initialQuantity: 1 },
    { id: 3, title: 'hamada', price: 30, initialQuantity: 1 },
    { id: 4, title: 'hamada', price: 30, initialQuantity: 1 },
  ]);

  useEffect(() => {
    const initialTotal = products.reduce(
      (sum, product) => sum + product.initialQuantity * parseFloat(product.price),
      0
    );
    setTotal(initialTotal);
  }, []);

  const handleQuantityChange = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              initialQuantity: Math.max(1, product.initialQuantity + change),
            }
          : product
      )
    );
  };

  useEffect(() => {
    const newTotal = products.reduce(
      (sum, product) => sum + product.initialQuantity * parseFloat(product.price),
      0
    );
    setTotal(newTotal);
  }, [products]);

  return (
    <div className="cart-container">
      <h2 className="shopping-label">Your Shopping Cart</h2>
      {products.length === 0 ? (
        <h4>Your cart is empty.</h4>
      ) : (
        products.map((product) => (
          <Cart
            key={product.id}
            title={product.title}
            price={product.price}
            initialQuantity={product.initialQuantity}
            onQuantityChange={(change) =>
              handleQuantityChange(product.id, change)
            }
          />
        ))
      )}
      <div className="Total-amount">
        {total} LE
        <button className="confirmation-button">Confirm</button>
      </div>
    </div>
  );
}

export default ShoppingCart;