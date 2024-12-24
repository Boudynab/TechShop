import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
const MobilesPage = () => {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleCompareSelection = (product, isSelected) => {
    if (isSelected) {
      setSelectedProducts((prev) => [...prev, product]);
    } else {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    }
  };

  const compareProducts = () => {
    if (selectedProducts.length === 2) {
      navigate('/compare', { state: { products: selectedProducts } });
    } else {
      alert('Please select exactly 2 products for comparison.');
    }
  };

  return (
    <div className="category-page">
      <h2>{categoryName} Mobiles</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} handleCompareSelection={handleCompareSelection}/>
        ))}
      </div>
      <button className="compare-button" onClick={compareProducts}>Compare Selected Products</button>
    </div>
  );
};
  
export default MobilesPage;
