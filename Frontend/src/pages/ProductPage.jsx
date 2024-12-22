import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="image-section">
         <img src={`data:image/jpeg;base64,${product.photo}`} alt="Decoded Photo" />
          <div className="thumbnail-row">
            {product.images?.map((image, index) => (
              <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
            ))}
          </div>
        </div>
        <div className="details-section">
          <h2>{product.name}</h2>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <p className="price">Price: ${product.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
