import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryMenu from './components/CategoryMenu';
import DesktopsPage from './pages/DesktopsPage';
import MobilesPage from './pages/MobilesPage';
import LaptopsPage from './pages/LaptopsPage';
import Chatbot from './components/ChatBot';
const App = () => {
  return (
    <div>
      
      <Router>
        <Navbar />
        <div className="main-content">
          <CategoryMenu />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/category/desktops" element={<DesktopsPage />} />
            <Route path="/category/mobiles" element={<MobilesPage />} />
            <Route path="/category/laptops" element={<LaptopsPage />} />

            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <Chatbot />
    </div>

  );
};

export default App;
