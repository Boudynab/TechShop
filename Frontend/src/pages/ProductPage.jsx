import React from 'react';
import { useParams } from 'react-router-dom';
import OIP from '../assets/images/OIP.jpeg';
import '../styles/ProductPage.css'; // For styling

const ProductPage = () => {
  const { productId } = useParams();

  // Placeholder product data
  const product = {
    name: 'Dell G15 Laptop - Intel Core i5',
    specifications: [
      'Specification 1: Detail 1',
      'Specification 2: Detail 2',
      'Specification 3: Detail 3',
      'Specification 4: Detail 4',
    ],
    price: '32,799 LE',
    images: [OIP, OIP, OIP, OIP],
    mainImage: OIP,
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="image-section">
          <img src={product.mainImage} alt={product.name} className="main-image" />
          <div className="thumbnail-row">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
            ))}
          </div>
        </div>
        <div className="details-section">
          <h2>{product.name}</h2>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <p className="price">Price: {product.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
