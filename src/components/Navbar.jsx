// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional CSS

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FlightBooker</h2>
      <p className="nav-links">
        <p><Link to="/">Check-in</Link></p>
        <p><Link to="/flights">Flights</Link></p>
        <p><Link to="/booking/">My Booking</Link></p> {/* Example ID */}
        <p><Link to="/confirmation">Confirmation</Link></p>
      </p>
    </nav>
  );
}

export default Navbar;
