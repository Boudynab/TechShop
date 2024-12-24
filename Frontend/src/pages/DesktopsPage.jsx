import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import ProductCard from '../components/ProductCard';

const DesktopsPage = () => {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products for sorting
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [selectedProducts, setSelectedProducts] = useState([]); 
  const [sortState, setSortState] = useState(0); // 0 = default, 1 = ascending, 2 = descending
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/TechShop/getAllDesktops`);
        console.log(response.data);  
        setProducts(response.data);  
        setFilteredProducts(response.data); // Initially set filteredProducts to all products
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);  

  // Sorting function
  const handleSort = () => {
    let sortedProducts = [...filteredProducts];
    if (sortState === 0) {
      // Default state (no sorting)
      setSortState(1); // Change to ascending state
    } else if (sortState === 1) {
      // Ascending state - sort by price ascending
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortState(2); // Change to descending state
    } else if (sortState === 2) {
      // Descending state - sort by price descending
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortState(0); // Change to default state
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
      <h2>{categoryName} Products</h2>

      {/* Sort Button */}
      <div className="sort-button-container">
        <button className="sort-button" onClick={handleSort}>
          {sortState === 0 
            ? "Sort by Price (Descending)" 
            : sortState === 1 
            ? "Sort by Price (Default)" 
            : "Sort by Price (Ascending)"}
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
  
export default DesktopsPage;
