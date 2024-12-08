import React from "react";
import { Link } from "react-router-dom";
import '../styles/global.css';
import '../styles/categoryMenu.css';

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      <h2>Categories</h2>
      <ul>
        <li><Link to="/category/desktops">Desktops</Link></li>
        <li><Link to="/category/mobiles">Mobiles</Link></li>
        <li><Link to="/category/laptops">Laptops</Link></li>
        {/* Add more categories here */}
      </ul>
    </div>
  );
};

export default CategoryMenu;
