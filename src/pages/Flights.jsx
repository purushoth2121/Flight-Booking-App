import React from 'react';

const flights = [
  { id: 445751, from: 'Chennai', to: 'Coimbatore', time: '10:00 AM', price: 3000 },
  { id: 982732, from: 'Coimbatore', to: 'Madurai', time: '12:00 PM', price: 3200 },
  { id: 254673, from: 'Madurai', to: 'Trichy', time: '2:00 PM', price: 2800 },
  { id: 854664, from: 'Chennai', to: 'Bangalore', time: '4:00 PM', price: 3500 },
  { id: 546675, from: 'Bangalore', to: 'Hyderabad', time: '6:00 PM', price: 4000 },
];

const Flights = () => {
  const addToBooking = (flight) => {
    const current = JSON.parse(localStorage.getItem('bookings')) || [];
    const updated = [...current, flight];
    localStorage.setItem('bookings', JSON.stringify(updated));
    alert("Flight added to booking!");
  };

  return (
    <div>
      <h2>Available Flights</h2>
      {flights.map((flight) => (
        <div key={flight.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <p><strong>Flight No:</strong> {flight.id}</p>
          <p>From: {flight.from}</p>
          <p>To: {flight.to}</p>
          <p>Time: {flight.time}</p>
          <p>Price: ₹{flight.price}</p>
          <button onClick={() => addToBooking(flight)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default Flights;