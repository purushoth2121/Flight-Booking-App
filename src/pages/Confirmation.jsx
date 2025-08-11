import React from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  const booking = JSON.parse(localStorage.getItem('selectedBooking'));
  const bookings = JSON.parse(localStorage.getItem('bookings')) || []; // ✅ Always an array

  if (!booking) {
    return (
      <div className="confirmation-container">
        <h2>No ticket selected</h2>
        <button onClick={() => navigate('/booking')}>Go Back</button>
      </div>
    );
  }

  const cancelTicket = () => {
    if (window.confirm("Are you sure you want to cancel this ticket?")) {
      // ✅ Remove only matching booking by ID
      const updatedBookings = bookings.filter(b => b && b.id !== booking.id);

      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      localStorage.removeItem('selectedBooking');

      alert("Your ticket has been canceled.");
      navigate('/booking');
    }
  };

  return (
    <div className="confirmation-container">
      <h2>Ticket Confirmation</h2>
      <div className="confirmation-card">
        <h3>Flight: {booking.id}</h3>
        <p><strong>From:</strong> {booking.from} ({booking.airpot})</p>
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
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <button
          style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}
          onClick={cancelTicket}
        >
          Cancel Ticket
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
