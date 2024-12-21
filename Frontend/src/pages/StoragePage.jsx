import React from 'react';
import ProductCard from '../components/ProductCard';
import storageImage from '../assets/images/sto.jpg';

const StoragePage = () => {
  const products = [
    { id: 1, name: 'Samsung SSD 970 EVO', price: '$150', image: storageImage, specifications: ["Capacity: 1TB", "Type: NVMe", "Read Speed: 3500 MB/s", "Write Speed: 3300 MB/s"] },
    { id: 2, name: 'Western Digital HDD', price: '$70', image: storageImage, specifications: ["Capacity: 2TB", "Type: SATA", "Speed: 7200 RPM"] },
  ];

  return (
    <div className="category-page">
      <h2>Storage Drives</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default StoragePage;
