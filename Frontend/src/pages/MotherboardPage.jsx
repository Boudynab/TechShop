import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import SearchBar from "../components/SearchBar"; // Import the SearchBar

const MotherboardPage = () => {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]);  // meow search
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortState, setSortState] = useState(1); // 1 = ascending, 2 = descending
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/TechShop/getAllMotherBoredId`);
        setProducts(response.data); 
        setFilteredProducts(response.data); // Initialize with all products
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);  

    // Search functionality
    const handleSearch = (query) => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(filtered); // Update the filtered products
    };
  

  // Handle product comparison selection
  const handleCompareSelection = (product, isSelected) => {
    if (isSelected) {
      setSelectedProducts((prev) => [...prev, product]);
    } else {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    }
  };

  // Compare selected products
  const compareProducts = () => {
    if (selectedProducts.length === 2) {
      navigate('/compare', { state: { products: selectedProducts } });
    } else {
      alert('Please select exactly 2 products for comparison.');
    }
  };

  
  // Search functionality
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered); // Update the filtered products
  };


  // Sorting functionality
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
    setFilteredProducts(sortedProducts); // Update filtered products with sorted order
  };

  // Loading or error state
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="category-page">
      <h2>{categoryName || "Motherboards"}</h2>
            {/* Include the SearchBar and pass handleSearch */}  
            <SearchBar onSearch={handleSearch} />
      {/* Sort Button */}
      <div className="sort-button-container">
        <button className="sort-button" onClick={handleSort}>
          {sortState === 1 ? "Sort by Price (Descending)" : "Sort by Price (Ascending)"}
        </button>
      </div>
      
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            handleCompareSelection={handleCompareSelection} 
          />
        ))}
      </div>

      <button className="compare-button" onClick={compareProducts}>
        Compare Selected Products
      </button>
    </div>
  );
};

export default MotherboardPage;
