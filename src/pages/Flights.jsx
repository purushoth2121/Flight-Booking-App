import React from 'react';
import React, { useState } from 'react';
import './flights.css';
import User from './User';

const flights = [
  { id: 234115, airport: 'Chennai Airport', from: 'Chennai', to: 'Coimbatore', time: '10:00 AM', price: 3000 },
  { id: 655483, airport: 'Coimbatore Airport', from: 'Coimbatore', to: 'Madurai', time: '12:00 PM', price: 3200 },
  { id: 965533, airport: 'Madurai Airport', from: 'Madurai', to: 'Trichy', time: '2:00 PM', price: 2800 },
  { id: 844411, airport: 'Chennai Airport', from: 'Chennai', to: 'Bangalore', time: '4:00 PM', price: 3500 },
  { id: 465656, airport: 'Bangalore Airport', from: 'Bangalore', to: 'Hyderabad', time: '6:00 PM', price: 4000 },
];

const Flights = () => {
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleBookClick = (flight) => {
    setSelectedFlight(flight);
    setShowUserForm(true);
  };

  const handleUserSubmit = (userData) => {
    // Save booking with user details
    const currentBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingWithUser = { ...selectedFlight, user: userData };
    const updatedBookings = [...currentBookings, bookingWithUser];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    alert('Flight booked successfully!');
    setShowUserForm(false);
    setSelectedFlight(null);
  };

  return (
    <div className='flight-container'>
      <h2 className='flight-heading'>Book domestic and international flights</h2>

      {flights.map((flight) => (
        <div key={flight.id} className='flight-card'>
          <p className='flight-id'>Flight: {flight.id}</p>
          <div className='flight-details'>
            <div className='flight-from'>
              <div>
                <p>From</p>
                <p>{flight.from}</p>
                <p>{flight.airport}</p>
              </div>
              <div>
                <p>To</p>
                <p>{flight.to}</p>
              </div>
            </div>
            <div className='flight-time'>
              <p>Departure</p>
              <p>{new Date().toLocaleDateString()}</p>
              <p>{flight.time}</p>
            </div>
            <div className='flight-price'>
              <p>INR ₹{flight.price}</p>
              <button onClick={() => handleBookClick(flight)}>Book Now</button>
            </div>
          </div>
        </div>
      ))}

      {showUserForm && (
        <User
          onClose={() => setShowUserForm(false)}
          onSubmit={handleUserSubmit}
        />
      )}
    </div>
  );
};

export default Flights;
