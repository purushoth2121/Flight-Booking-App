import React from 'react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './booking.css';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const cleanedBookings = savedBookings.filter(
      b => b && typeof b === 'object' && b.id
    );
    setBookings(cleanedBookings);
  }, []);

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter(b => b.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const handleConfirm = (booking) => {
    localStorage.setItem('selectedBooking', JSON.stringify(booking));
    navigate('/confirmation');
  };

  return (
    <div className="booking-container">
      <h2>Your Booked Tickets</h2>
      {bookings.length === 0 ? (
        <p>No tickets booked yet.</p>
      ) : (
        bookings.map((booking) => (
          booking && (
            <div key={booking.id} className="booking-card">
              <h3>Flight: {booking.id}</h3>
              <p><strong>From:</strong> {booking.from} ({booking.airport})</p>
              <p><strong>To:</strong> {booking.to}</p>
              <p><strong>Departure:</strong> {booking.time}</p>
              <p><strong>Price:</strong> ₹{booking.price}</p>
              {booking.user && (
                <>
                  <h4>User Details</h4>
                  <p><strong>Name:</strong> {booking.user.name}</p>
                  <p><strong>Email:</strong> {booking.user.email}</p>
                  <p><strong>Phone:</strong> {booking.user.phone}</p>
                  <p><strong>Address:</strong> {booking.user.address}</p>
                </>
              )}
              <div className="booking-actions">
                <button className="cancel-btn" onClick={() => handleCancel(booking.id)}>Cancel</button>
                <button className="confirm-btn" onClick={() => handleConfirm(booking)}>Confirm</button>
              </div>
            </div>
          )
        ))
      )}
    </div>
  );
};

export default Booking;
