import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import ProductCard from '../components/ProductCard';

const MobilesPage = () => {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products for sorting
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortState, setSortState] = useState(1); // 1 = ascending, 2 = descending
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/TechShop/getAllMobile`);
        console.log(response.data);  
        setProducts(response.data);  
        setFilteredProducts(response.data); // Initially set filteredProducts to all products
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchMobile();
  }, []);  

  // Sorting function
  const handleSort = () => {
    let sortedProducts = [...filteredProducts];
    if (sortState === 1) {
      // Ascending state - sort by price ascending
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortState(2); // Change to descending state
    } else if (sortState === 2) {
      // Descending state - sort by price descending
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortState(1); // Change to ascending state
    }
    setFilteredProducts(sortedProducts); // Update the filtered products with sorted order
  };

  // Loading or error state
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

      {/* Sort Button */}
      <div className="sort-button-container">
        <button className="sort-button" onClick={handleSort}>
          {sortState === 1 
            ? "Sort by Price (Ascending)" 
            : "Sort by Price (Descending)"}
        </button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} handleCompareSelection={handleCompareSelection} />
        ))}
      </div>
      <button className="compare-button" onClick={compareProducts}>Compare Selected Products</button>
    </div>
  );
};

export default MobilesPage;
