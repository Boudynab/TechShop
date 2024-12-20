import React from 'react';
import ProductCard from '../components/ProductCard';
import motherboardImage from '../assets/images/moth.jpg';

const MotherboardPage = () => {
  const products = [
    { id: 1, name: 'ASUS ROG Strix', price: '$250', image: motherboardImage, specifications: ["Chipset: Z590", "Form Factor: ATX", "Slots: PCIe 4.0", "Memory: DDR4"] },
    { id: 2, name: 'MSI B450 TOMAHAWK', price: '$120', image: motherboardImage, specifications: ["Chipset: B450", "Form Factor: ATX", "Slots: PCIe 3.0", "Memory: DDR4"] },
  ];

  return (
    <div className="category-page">
      <h2>Motherboards</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MotherboardPage;
