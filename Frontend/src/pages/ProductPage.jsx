import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/ProductPage.css';
import axios from 'axios';

const ProductPage = ({ user,itemType }) => {
  const { productId } = useParams();
  const location = useLocation();
  const product = location.state?.product;
  const itemtype = location.state?.itemtype;  

  const handleAddToCart = async () => {
    console.log(productId);
    console.log(user.id);
    console.log(product);  
    console.log(itemtype);
    console.log('Product added to cart');
    const response = await axios.post(`http://localhost:8080/TechShop/addcart`, {
      "userId": user.id,
      "itemId": productId,
      "itemType" : "Ram",
      "quantity": 1
    });
  };

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <div className="product-page">
      <div className="product-container">
        <div className="image-section">
         <img src={`data:image/jpeg;base64,${product.photo}`} alt="Decoded Photo" />
          <div className="thumbnail-row">
            {product.images?.map((image, index) => (
              <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
            ))}
          </div>
        </div>
        <div className="details-section">
          <h2>{product.name}</h2>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications?.map((spec, index) => (
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
              ))}
            </ul>
          </div>
          <p className="price">Price: ${product.price}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
