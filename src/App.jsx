
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/index';
import Flights from './pages/Flights';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <ScrollUp />
      <Footer />  
    </Router>
  )
}
export default App;