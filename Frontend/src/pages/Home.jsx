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
const Home = () => {
  const categories = [
    { id: 1, name: "Processors", image: pro },
    { id: 2, name: "Storage drives", image: sto },
    { id: 3, name: "Motherboards", image: moth },
    { id: 4, name: "RAMs", image: ram },
    { id: 5, name: "Laptops", image: lap },
    { id: 6, name: "Mobile Phones", image: phone },
  ];

  return (
    <div className="home-page">
      <CategoryMenu />
      <h1 className="home-title">Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-icon" />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
