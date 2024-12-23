import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/compare.css';

const ComparePage = () => {
  const location = useLocation();
  const { products } = location.state || {};

  if (!products || products.length !== 2) {
    return <div>Error: Please select exactly two products to compare.</div>;
  }

  return (
    <div className="compare-page">
      <h2>Compare Products</h2>
      <div className="compare-container">
        {/* Product 1 */}
        <div className="product-card">
          <div className="product-image">
            <img src={`data:image/jpeg;base64,${products[0].photo}`} alt="Product 1" />
          </div>
          <div className="product-details">
            <h3>{products[0].name}</h3>
            <p className="price">${products[0].price}</p>
            <h4>Specifications:</h4>
            <ul>
              {products[0].specifications?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <div className="product-image">
            <img src={`data:image/jpeg;base64,${products[1].photo}`} alt="Product 2" />
          </div>
          <div className="product-details">
            <h3>{products[1].name}</h3>
            <p className="price">${products[1].price}</p>
            <h4>Specifications:</h4>
            <ul>
              {products[1].specifications?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
