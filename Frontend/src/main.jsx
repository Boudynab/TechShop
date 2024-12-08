import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ API
import './styles/global.css';  // Import global styles
import App from './App'; // Import the main App component

// Get the root element from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
