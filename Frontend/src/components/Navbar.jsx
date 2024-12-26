import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt, FaPhone, FaEnvelope, FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";
import '../styles/global.css';
import '../styles/navbar.css';
import logo1 from '../assets/images/logo1.jpg';
import ProfileModal from "./ProfileModal"; // Import the ProfileModal component

const Navbar = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true); // Open the modal when the profile icon is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo1} alt="TechShop Logo" className="logo-image" /></Link>
      </div>

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
        {/* User Profile Button */}
        <button className="navbar-action" onClick={handleProfileClick}>
          <FaUserCircle className="navbar-icon" /> Profile
        </button>
      </div>

      {/* Profile Modal */}
      {isModalOpen && <ProfileModal user={user} onClose={handleCloseModal} />}

      <div className="navbar-contact">
        <a href={`mailto:${user?.email || "support@example.com"}`} className="navbar-icon-link">
          <FaEnvelope className="navbar-icon" />
        </a>
        <a href="tel:+01212121212" className="navbar-icon-link">
          <FaPhone className="navbar-icon" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
