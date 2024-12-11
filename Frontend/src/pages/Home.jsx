import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductCard from "../components/ProductCard";
import '../styles/global.css';
import '../styles/home.css';
import pro from '../assets/images/pro.jpg';
import ram from '../assets/images/ram.jpg';
import lap from '../assets/images/lap.jpg';
import moth from '../assets/images/moth.jpg';
import sto from '../assets/images/sto.jpg';
import phone from '../assets/images/phone.jpg';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, name: "Processors", image: pro, path: "/category/processors" },
    { id: 2, name: "Storage drives", image: sto, path: "/category/storage-drives" },
    { id: 3, name: "Motherboards", image: moth, path: "/category/motherboards" },
    { id: 4, name: "RAMs", image: ram, path: "/category/rams" },
    { id: 5, name: "Laptops", image: lap, path: "/category/laptops" },
    { id: 6, name: "Mobile Phones", image: phone, path: "/category/mobiles" },
  ];

  return (
    <div className="home-page">
      <CategoryMenu />
      <h1 className="home-title">Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card"  onClick={() => navigate(category.path)} >
            <img src={category.image} alt={category.name} className="category-icon" />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
