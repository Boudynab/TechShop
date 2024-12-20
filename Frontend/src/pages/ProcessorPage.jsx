import React from 'react';
import ProductCard from '../components/ProductCard';
import processorImage from '../assets/images/pro.jpg';

const ProcessorPage = () => {
  const products = [
    { id: 1, name: 'Intel Core i7', price: '$300', image: processorImage, specifications: ["Cores: 8", "Threads: 16", "Base Clock: 3.8 GHz", "Boost Clock: 5.0 GHz"] },
    { id: 2, name: 'AMD Ryzen 5', price: '$200', image: processorImage, specifications: ["Cores: 6", "Threads: 12", "Base Clock: 3.6 GHz", "Boost Clock: 4.4 GHz"] },
  ];

  return (
    <div className="category-page">
      <h2>Processors</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProcessorPage;
