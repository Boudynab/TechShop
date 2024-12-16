import React from "react";
import { Link } from "react-router-dom";
import '../styles/productCard.css'; // Import product card styles
import OIP from '../assets/images/OIP.jpeg';
import i2 from '../assets/images/i2.jpeg';

//these file is for the product details , OMAR needs a backend developer to help him ;(

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link 
        className='view-product' 
        to={`/product/${product.id}`} 
        state={{ product }}
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
