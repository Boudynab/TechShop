import React from "react";
import '../styles/profileModal.css'; // You can create your custom styles here

const ProfileModal = ({ onClose }) => {
  const user = {
    name: "Omar Khaled",
    email: "omar2004khaled@gmail.com",
  };

  return (
    <div className="profile-modal-overlay">
      <div className="profile-modal">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="profile-modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
