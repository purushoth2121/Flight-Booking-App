import React, { useState } from 'react';
import './user.css';

const User = ({ onClose, onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the selected flight from localStorage
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight'));

    // Combine user + flight into a ticket
    const ticket = { user: userData, flight: selectedFlight };
    localStorage.setItem('ticket', JSON.stringify(ticket));

    // Also store the booking in bookings list
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, selectedFlight]));

    onSubmit(userData); // Pass data back to parent
  };

  return (
    <div className="login-modal">
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Phone:</label>
          <input type="tel" name="phone" value={userData.phone} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Address:</label>
          <input type="text" name="address" value={userData.address} onChange={handleChange} />
        </div>
        <button type="submit">Save & Book</button>
        <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default User;
