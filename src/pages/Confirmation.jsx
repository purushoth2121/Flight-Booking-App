import React, { useEffect, useState } from 'react';

const Confirmation = () => {
  const [confirmedBookings, setConfirmedBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('confirmedBookings')) || [];
    setConfirmedBookings(stored);
  }, []);

  const downloadSingleTicket = (flight, index) => {
    const ticketText = `Ticket ${index + 1}:\nFrom: ${flight.from}\nTo: ${flight.to}\nTime: ${flight.time}\nPrice: ₹${flight.price}`;

    const blob = new Blob([ticketText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ticket_${index + 1}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const cancelBooking = (index) => {
    const updated = confirmedBookings.filter((_, i) => i !== index);
    setConfirmedBookings(updated);
    localStorage.setItem('confirmedBookings', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Confirmed Bookings</h2>
      {confirmedBookings.length > 0 ? (
        confirmedBookings.map((flight, index) => (
          <div key={index} style={{ border: '1px solid green', margin: '10px', padding: '10px' }}>
            <p><strong>Flight No:</strong> {flight.id}</p>
            <p><strong>From:</strong> {flight.from}</p>
            <p><strong>To:</strong> {flight.to}</p>
            <p><strong>Time:</strong> {flight.time}</p>
            <p><strong>Price:</strong> ₹{flight.price}</p>
            <p>✔ Confirmed</p>
            <button onClick={() => downloadSingleTicket(flight, index)} style={{ marginRight: '10px' }}>
              Download Ticket
            </button>
            <button onClick={() => cancelBooking(index)} style={{ color: 'red' }}>
              Cancel Ticket
            </button>
          </div>
        ))
      ) : (
        <p>No confirmed bookings yet.</p>
      )}
    </div>
  );
};

export default Confirmation;