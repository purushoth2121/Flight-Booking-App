import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  const confirmBooking = (flight, index) => {
    // Save to confirmed bookings
    const confirmed = JSON.parse(localStorage.getItem('confirmedBookings')) || [];
    const updatedConfirmed = [...confirmed, flight];
    localStorage.setItem('confirmedBookings', JSON.stringify(updatedConfirmed));

    // Navigate to confirmation page
    navigate('/confirmation');

    // Remove from bookings
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  const cancelBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Booking Page</h2>
      {bookings.length > 0 ? (
        bookings.map((flight, index) => (
          <div key={index} style={{ border: '1px dashed gray', margin: '10px', padding: '10px' }}>
            <p><strong>Flight No:</strong> {flight.id}</p>
            <p><strong>From:</strong> {flight.from}</p>
            <p><strong>To:</strong> {flight.to}</p>
            <p><strong>Time:</strong> {flight.time}</p>
            <p><strong>Price:</strong> ₹{flight.price}</p>
            <button onClick={() => confirmBooking(flight, index)}>Confirm</button>
            <button onClick={() => cancelBooking(index)} style={{ marginLeft: '10px', color: 'red' }}>
              Cancel
            </button>
          </div>
        ))
      ) : (
        <p>No tickets booked yet.</p>
      )}
    </div>
  );
};

export default Booking;