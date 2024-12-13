import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import iphone from '../assets/images/iphone.jpeg';
import samsung  from '../assets/images/samsung.jpeg'; 
import SearchBar from '../components/SearchBar';

const MobilesPage = () => {
    const { categoryName } = useParams();

    // Placeholder data
    const products = [
      { id: 1, name: 'Iphone 12', price: '$100', image: iphone},
      { id: 2, name: 'Iphone 15', price: '$200', image: iphone },
      { id: 1, name: 'Iphone 16', price: '$100', image:   iphone },
      { id: 2, name: 'Samsung s22', price: '$200', image: samsung },
      { id: 1, name: 'Samsung s23', price: '$100', image: samsung },
      { id: 2, name: 'Samsung s24', price: '$200', image: samsung },
      { id: 1, name: 'Iphone 12', price: '$100', image: iphone},
      { id: 2, name: 'Iphone 15', price: '$200', image: iphone },
      { id: 1, name: 'Iphone 16', price: '$100', image:   iphone },
      { id: 2, name: 'Samsung s22', price: '$200', image: samsung },
      { id: 1, name: 'Samsung s23', price: '$100', image: samsung },
      { id: 2, name: 'Samsung s24', price: '$200', image: samsung },
  
  
  
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
  
export default MobilesPage;
