
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

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
    navigate('/flights', { state: formData });
  };

  return (
    <div>

      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>Find Your Next Adventure</h1>
        <p>Millions of cheap flights. One simple search.</p>
        <button onClick={handleSubmit}>Search Flights</button>
      </div>

      {/* Offers Section */}
      <div className="index">
        <div className='offers'>
          <div>
            <h2>Offers</h2>
            <p>Get $100 On first booking</p>
            <p>15% off on round trip flights</p>
            <p>Free cancellation on all flights</p>
            <p>Book now and get a free meal</p>
            <button>Book Now</button>
          </div>
        </div>

        {/* Search Flights Form */}
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
      </div>

      {/* Popular Destinations */}
      <div className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" alt="Paris" />
            <p>Paris, France</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Goa" />
            <p>Goa, India</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Tamilnadu" />
            <p>Tamilnadu, India</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1549887534-4a43aaee17a6" alt="Dubai" />
            <p>Dubai, UAE</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons">
          <div>
            <h3>💰 Best Prices</h3>
            <p>Find unbeatable deals every day.</p>
          </div>
          <div>
            <h3>📞 24/7 Support</h3>
            <p>We’re always here to help you.</p>
          </div>
          <div>
            <h3>✈ Easy Booking</h3>
            <p>Book your trip in just a few clicks.</p>
          </div>
        </div>
      </div>

      {/* Our flights */}
      <div className='stats-container'>
        <div className="stats">
          <div className="stats-boxs-1">
            <h1>1,300+</h1>
            <p>Daily flights</p>
          </div>
          <div className="stats-boxs-2">
            <div className='stats-box1'>
              <h1>70+</h1>
              <p>Domestic Destinations</p>
            </div>
            <div className='stats-box1'>
              <h1>30+</h1>
              <p>International Destinations</p>
            </div>
            <div className='stats-box1'>
              <h1>1000+</h1>
              <p>Happy customers</p>
            </div>
            <div className='stats-box1'>
              <h1>100+</h1>
              <p>Fleet strong</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter">
        <h2>Stay Updated on Deals</h2>
        <p>Subscribe to our newsletter for the latest offers.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </div>
  );
}

export default Index;
