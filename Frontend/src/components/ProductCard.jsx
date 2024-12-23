import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/productCard.css';

const ProductCard = ({ product, handleCompareSelection }) => {
  const [selected, setSelected] = useState(false);

  const handleSelectionChange = (e) => {
    setSelected(e.target.checked);
    handleCompareSelection(product, e.target.checked);
  };

  return (
    <div className="product-card">
      <img src={`data:image/jpeg;base64,${product.photo}`} alt="Decoded Photo" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <label>
        <input type="checkbox" checked={selected} onChange={handleSelectionChange} />
        Select for Comparison
      </label>
      <Link
        className="view-product"
        to={`/product/${product.id}`}
        state={{ product }}
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
