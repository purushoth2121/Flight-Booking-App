// src/components/Navbar.js
import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">FlyBook</h2>
        <ul className="nav-links">
          <p><Link to="/">Check-in</Link></p>
          <p><Link to="/flights">Flights</Link></p>
          <p><Link to="/booking/">My Booking</Link></p>
          <p><Link to="/confirmation">Confirmation</Link></p>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
