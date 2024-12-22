import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
const MobilesPage = () => {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/TechShop/getAllMobile`);
        console.log(response.data);  
        setProducts(response.data);  
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchMobile();
    console.log(products);
  }, []);  
  if (loading) {
    return <div>Loading...</div>; 
  }
  if (error) {
    return <div>{error}</div>; 
  }
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
