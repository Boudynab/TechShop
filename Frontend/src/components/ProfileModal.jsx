import React from "react";
import '../styles/profileModal.css'; // Your custom styles

const ProfileModal = ({ user, onClose }) => {
  return (
    <div className="profile-modal-overlay">
      <div className="profile-modal">
        <h2>User Profile</h2>
        {user ? (
          <>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </>
        ) : (
          <p>No user information available.</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;

