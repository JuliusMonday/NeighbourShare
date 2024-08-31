import React, { useState } from 'react';
import { FaUser, FaEdit, FaSearch, FaUpload } from 'react-icons/fa';
import { MdDashboard, MdSettings, MdLogout } from 'react-icons/md';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    location: 'New York, NY',
    bio: 'I love sharing and helping my neighbors!'
  });

  const [profilePicture, setProfilePicture] = useState('https://randomuser.me/api/portraits/men/1.jpg');
  const [items, setItems] = useState([
    { id: 1, name: 'Bicycle', description: 'Gently used mountain bike', category: 'Sports', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Book Collection', description: 'Classic literature set', category: 'Books', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Coffee Maker', description: 'Barely used, makes great coffee', category: 'Appliances', image: 'https://images.unsplash.com/photo-1517080788927-c11f59887473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    category: '',
    image: ''
  });

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewItemChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleNewItemImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({ ...newItem, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: '', description: '', category: '', image: '' });
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">NeighborShare</h2>
        <nav>
          <ul className="sidebar-nav">
            <li><a href="#" className="sidebar-link"><MdDashboard className="sidebar-icon" /><span>Dashboard</span></a></li>
            <li><a href="#" className="sidebar-link"><FaUser className="sidebar-icon" /><span>Profile</span></a></li>
            <li><a href="#" className="sidebar-link"><MdSettings className="sidebar-icon" /><span>Settings</span></a></li>
            <li><a href="#" className="sidebar-link"><MdLogout className="sidebar-icon" /><span>Logout</span></a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="content-title">My Profile</h1>

          <div className="grid">
            {/* Profile Information */}
            <div className="card">
              <h2 className="card-title">Personal Details</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" value={personalDetails.name} onChange={handlePersonalDetailsChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" value={personalDetails.email} onChange={handlePersonalDetailsChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input type="text" id="location" name="location" value={personalDetails.location} onChange={handlePersonalDetailsChange} className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="bio" className="form-label">Bio</label>
                  <textarea id="bio" name="bio" value={personalDetails.bio} onChange={handlePersonalDetailsChange} rows="3" className="form-textarea"></textarea>
                </div>
                <button type="submit" className="button">Save Changes</button>
              </form>
            </div>

            {/* Profile Picture */}
            <div className="card profile-picture">
              <h2 className="card-title">Profile Picture</h2>
              <div className="profile-img-wrapper">
                <img src={profilePicture} alt="Profile" className="profile-img" />
              </div>
              <label htmlFor="profile-picture" className="button change-picture">
                <FaUpload className="upload-icon" />
                Change Picture
              </label>
              <input type="file" id="profile-picture" className="hidden" onChange={handleProfilePictureChange} accept="image/*" />
            </div>

            {/* Post Items Form */}
            <div className="card">
              <h2 className="card-title">Post New Item</h2>
              <form onSubmit={handleAddItem}>
                <div className="form-group">
                  <label htmlFor="item-name" className="form-label">Item Name</label>
                  <input type="text" id="item-name" name="name" value={newItem.name} onChange={handleNewItemChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-description" className="form-label">Description</label>
                  <textarea id="item-description" name="description" value={newItem.description} onChange={handleNewItemChange} rows="3" className="form-textarea" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="item-category" className="form-label">Category</label>
                  <input type="text" id="item-category" name="category" value={newItem.category} onChange={handleNewItemChange} className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="item-image" className="form-label">Item Image</label>
                  <input type="file" id="item-image" onChange={handleNewItemImageChange} accept="image/*" className="form-input" required />
                </div>
                <button type="submit" className="button">Add Item</button>
              </form>
            </div>
          </div>

          {/* Posted Items */}
          <div className="posted-items">
            <h2 className="posted-items-title">My Posted Items</h2>
            <div className="grid posted-items-grid">
              {items.map((item) => (
                <div key={item.id} className="posted-item">
                  <img src={item.image} alt={item.name} className="posted-item-img" />
                  <div className="posted-item-content">
                    <h3 className="posted-item-title">{item.name}</h3>
                    <p className="posted-item-description">{item.description}</p>
                    <span className="posted-item-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
