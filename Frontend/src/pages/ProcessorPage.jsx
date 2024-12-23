import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProcessorPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sortState, setSortState] = useState(1); // 1: Ascending, 2: Descending
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/TechShop/getAllProcessors');
        console.log(response.data);
        setProducts(response.data);
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

  const sortProducts = () => {
    let sortedProducts;
    if (sortState === 1) {
      // Ascending order
      sortedProducts = [...products].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortState(2); // Switch to descending
    } else {
      // Descending order
      sortedProducts = [...products].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortState(1); // Switch to ascending
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="category-page">
      <h2>Processors</h2>
      <button className="sort-button" onClick={sortProducts}>
        {sortState === 1 ? 'Sort by Price: Ascending' : 'Sort by Price: Descending'}
      </button>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} handleCompareSelection={handleCompareSelection} />
        ))}
      </div>
      <button className="compare-button" onClick={compareProducts}>
        Compare Selected Products
      </button>
    </div>
  );
};

export default ProcessorPage;
