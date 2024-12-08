import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import SearchBar from "./SearchBar";
import '../styles/global.css';
import '../styles/navbar.css';
import logo1 from '../assets/images/logo1.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo1} alt="TechShop Logo" className="logo-image" /></Link>
      </div>
      <div className="navbar-contact">
        <FaEnvelope className="navbar-icon" />
        <FaPhone className="navbar-icon" />
      </div>
      <SearchBar />
      <div className="navbar-actions">
        <Link to="/login" className="navbar-action">
          <FaUserAlt className="navbar-icon" /> Log In
        </Link>
        <Link to="/register" className="navbar-action">
          <FaUserAlt className="navbar-icon" /> Register
        </Link>
        <Link to="/cart" className="navbar-action">
          <FaShoppingCart className="navbar-icon" /> Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
