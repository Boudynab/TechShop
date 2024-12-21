import React, { useState } from 'react';
import '../styles/Cart.css'; 

const Cart = ({ 
  image = '/api/placeholder/200/200',
  title = 'Product Title',
  price = '0',
  onQuantityChange,
  initialQuantity = 1
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange?.(change, newQuantity);
    }
  };

  const calculateTotal = () => {
    try {
      const numPrice = parseFloat(price.toString().replace(/,/g, '')) || 0;
      return (numPrice * quantity).toLocaleString();
    } catch (error) {
      console.error('Price calculation error:', error);
      return '0';
    }
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <div className="image-container">
          {isImageLoading && (
            <div className="skeleton-loader" />
          )}
          <img 
            src={image} 
            alt={title}
            className={`product-image ${isImageLoading ? 'image-loading' : 'image-loaded'}`}
            onLoad={() => setIsImageLoading(false)}
            onError={(e) => {
              e.target.src = '/api/placeholder/200/200';
              setIsImageLoading(false);
            }}
          />
        </div>
        <div>
          <h3 className="product-title">{title}</h3>
        </div>
      </div>
      
      <div className="quantity-controls">
        <div className="quantity-buttons">
          <button 
            onClick={() => handleQuantityChange(1)}
            className="quantity-button"
            aria-label="Increase quantity"
          >
            ▲
          </button>
          <span className="quantity-number">{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(-1)}
            className="quantity-button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            ▼
          </button>
        </div>
        
        <div className="price-container">
          <p className="total-label">Total:</p>
          <p className="total-price">
            {calculateTotal()} LE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;