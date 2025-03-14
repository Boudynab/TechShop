import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import SearchBar from "../components/SearchBar"; // Import the SearchBar

const LaptopsPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortState, setSortState] = useState(1); // 1: Ascending, 2: Descending
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]); // Meow search

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/TechShop/getAllCategories');
        console.log(response.data);
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts with all products
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
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

  // Search functionality
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filtered); // Update the filtered products
  };

  const sortProducts = () => {
    let sortedProducts;
    if (sortState === 1) {
      // Ascending order
      sortedProducts = [...filteredProducts].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortState(2); // Switch to descending
    } else {
      // Descending order
      sortedProducts = [...filteredProducts].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortState(1); // Switch to ascending
    }
    setFilteredProducts(sortedProducts); // Update only filteredProducts for rendering
  };

  return (
    <div className="category-page">
      <h2>{categoryName} Laptops</h2>

      {/* Include the SearchBar and pass handleSearch */}
      <SearchBar onSearch={handleSearch} />

      <button className="sort-button" onClick={sortProducts}>
        {sortState === 1 ? 'Sort by Price: Ascending' : 'Sort by Price: Descending'}
      </button>
      <div className="product-list">
        {filteredProducts.map((product) => ( // Render filteredProducts instead of products
          <ProductCard
            key={product.id}
            product={{ ...product, itemType: "Category" }} // Include the itemType
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

export default LaptopsPage;
