import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import pc from '../assets/images/pc.jfif';
const DesktopsPage = () => {
    const { categoryName } = useParams();

    // Placeholder data
    const products = [
      { id: 1, name: 'Lenovo Legion Tower 5i', price: '$100', image: pc },
      { id: 2, name: 'Lenovo Legion Tower 5i', price: '$200', image: pc },
      { id: 1, name: 'Lenovo Legion Tower 5i', price: '$100', image: pc },
      { id: 2, name: 'Lenovo Legion Tower 5i', price: '$200', image: pc },
      { id: 1, name: 'Lenovo Legion Tower 5i', price: '$100', image: pc },
      { id: 2, name: 'Lenovo Legion Tower 5i', price: '$200', image: pc },
      { id: 1, name: 'Lenovo Legion Tower 5i', price: '$100', image: pc },
      { id: 2, name: 'Lenovo Legion Tower 5i', price: '$200', image: pc },
      { id: 1, name: 'Lenovo Legion Tower 5i', price: '$100', image: pc },
      { id: 2, name: 'Lenovo Legion Tower 5i', price: '$200', image: pc },
      { id: 1, name: 'Lenovo Legion Tower 5i', price: '$100', image: pc },
      { id: 2, name: 'Lenovo Legion Tower 5i', price: '$200', image: pc },
  
  
  
  
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
  
export default DesktopsPage;
