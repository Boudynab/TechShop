import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import RAMImage from '../assets/images/ram.jpg'; // Replace with your RAM image path

const RamPage = () => {
  const { categoryName } = useParams();

  // Placeholder data for RAM products
  const products = [
    {
      id: 1,
      name: 'Corsair Vengeance 16GB',
      price: '$80',
      image: RAMImage,
      specifications: [
        'Type: DDR4',
        'Speed: 3200 MHz',
        'Capacity: 16GB',
        'Voltage: 1.35V',
      ],
    },
    {
      id: 2,
      name: 'G.Skill Ripjaws 8GB',
      price: '$40',
      image: RAMImage,
      specifications: [
        'Type: DDR4',
        'Speed: 2400 MHz',
        'Capacity: 8GB',
        'Voltage: 1.2V',
      ],
    },
    {
      id: 3,
      name: 'Kingston Fury Beast 32GB',
      price: '$150',
      image: RAMImage,
      specifications: [
        'Type: DDR5',
        'Speed: 4800 MHz',
        'Capacity: 32GB',
        'Voltage: 1.1V',
      ],
    },
    {
      id: 4,
      name: 'TeamGroup T-Force 16GB',
      price: '$70',
      image: RAMImage,
      specifications: [
        'Type: DDR4',
        'Speed: 3000 MHz',
        'Capacity: 16GB',
        'Voltage: 1.35V',
      ],
    },
  ];

  return (
    <div className="category-page">
      <h2>{categoryName || 'RAM'} Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RamPage;
