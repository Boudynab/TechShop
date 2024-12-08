import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the main App component
import "./styles/global.css"; // Import global CSS

// Render the React app into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
