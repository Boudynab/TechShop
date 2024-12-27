import React from 'react';
import '../styles/Cart.module.css';

const Cart = ({ name, image, price, initialQuantity, onQuantityChange,onRemove }) => {
  return (
    <div className="cart-item">
      <img src={`data:image/jpeg;base64,${image}`} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Price: {price} LE</p>
        <div className="quantity-controls">
          <button onClick={() => onQuantityChange(-1)}>-</button>
          <span style={{ color: 'black', fontWeight: 'bold' }}>{initialQuantity}</span>
          <button onClick={() => onQuantityChange(1)}>+</button>
        </div>
        {/* <button className="remove-item-button" onClick={onRemove}>Remove</button> */}
      </div>
    </div>
  );
};

export default Cart;
