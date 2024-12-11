import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import OIP from '../assets/images/OIP.jpeg';
const LaptopsPage = () => {
    const { categoryName } = useParams();

    // Placeholder data
    const products = [
      { id: 1, name: 'Dell g15', price: '$100', image: OIP },
      { id: 2, name: 'Dell g15', price: '$200', image: OIP },
      { id: 1, name: 'Dell g15', price: '$100', image: OIP },
      { id: 2, name: 'Dell g15', price: '$200', image: OIP },
      { id: 1, name: 'Dell g15', price: '$100', image: OIP },
      { id: 2, name: 'Dell g15', price: '$200', image: OIP },
  
  
  
    ];
  
    return (
      <div className="category-page">
        <h2>{categoryName} Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
export default LaptopsPage;
