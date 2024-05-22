import React, { useState } from 'react';

const UserProfilePage = () => {
  // Initialize profile data in state
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    dietaryPreferences: [],
    savedRecipes: [],
    // Add other profile fields as needed
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user's profile (e.g., store in browser storage)
    // For example, localStorage.setItem('profile', JSON.stringify(profileData));
    console.log('Profile updated:', profileData);
    alert('Profile updated successfully!');
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            disabled // Email is disabled for editing
          />
        </div>
        {/* Add more fields for dietary preferences, saved recipes, etc. */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfilePage;
