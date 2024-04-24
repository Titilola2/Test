import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Import your page components
import AboutUs from './pages/aboutus'; // Import your page 
import Services from './pages/services';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<AboutUs />} />
       <Route path="/services" element={<Services />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
