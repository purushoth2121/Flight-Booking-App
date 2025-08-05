import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Flights from './pages/Flights.jsx';
import Home from './pages/Index.jsx'
import Booking from './pages/Booking.jsx';
import Confirmation from './pages/Confirmation.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Flights" element={<Flights />}/>
        <Route path="/Booking" element={<Booking />}/>
        <Route path="/Confirmation" element={<Confirmation />}/>
      </Routes>
    </Router>
  )
}

export default App;