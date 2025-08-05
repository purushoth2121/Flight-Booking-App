import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './homepage.css'; // Optional for styling

function Index() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send this via state or URL query params
    navigate('/flights', { state: formData });
  };

  return (
    <div className="home-container">
      <h1>Search Flights</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="from"
          placeholder="From"
          value={formData.from}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={formData.to}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="passengers"
          min="1"
          value={formData.passengers}
          onChange={handleChange}
          required
        />
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
}

export default Index;
