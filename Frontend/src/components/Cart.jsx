import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import styles from '../styles/Cart.module.css';

// Product Card Component
const Cart = ({ 
  id,
  image,
  title,
  price,
  onQuantityChange,
  onDelete,
  initialQuantity = 1
}) => {
  
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange?.(id, newQuantity);
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
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <div className={styles.imageContainer}>
          {isImageLoading && (
            <div className={styles.skeletonLoader} />
          )}
          <img 
            src={image} 
            alt={title}
            className={`${styles.productImage} ${
              isImageLoading ? styles.imageLoading : styles.imageLoaded
            }`}
            onLoad={() => setIsImageLoading(false)}
            onError={(e) => {
              e.target.src = '/api/placeholder/200/200';
              setIsImageLoading(false);
            }}
          />
        </div>
        <div>
          <h3 className={styles.productTitle}>{title}</h3>
        </div>
      </div>
      
      <div className={styles.quantityControls}>
        <div className={styles.quantityButtons}>
          <button 
            onClick={() => handleQuantityChange(1)}
            className={styles.quantityButton}
            aria-label="Increase quantity"
          >
            ▲
          </button>
          <span className={styles.quantityNumber}>{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(-1)}
            className={styles.quantityButton}
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            ▼
          </button>
        </div>
        
        <div className={styles.priceContainer}>
          <p className={styles.totalLabel}>Total:</p>
          <div className={styles.priceWithDelete}>
            <p className={styles.totalPrice}>
              {calculateTotal()} LE
            </p>
            <button 
              onClick={() => onDelete?.(id)}
              className={styles.deleteButton}
              aria-label="Remove item"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart