import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
// Styles for category page
 
const CategoryPage = () => {
  const { categoryName } = useParams();

  // Placeholder data
  const products = [
    { id: 1, name: 'Product 1', price: '$100', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$200', image: 'product2.jpg' },
    { id: 1, name: 'Product 1', price: '$100', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$200', image: 'product2.jpg' },
    { id: 1, name: 'Product 1', price: '$100', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: '$200', image: 'product2.jpg' },



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

export default CategoryPage;
