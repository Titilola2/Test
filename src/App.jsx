import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Import your page components
import AboutUs from './pages/aboutus'; // Import your page components


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<AboutUs />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
