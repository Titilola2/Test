import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Import your page components
import AboutUs from './pages/aboutus'; // Import your page 
import Services from './pages/services';
import People from './pages/people';
import ContactUs from './pages/contact-us';
import Donate from './pages/donate';
import Enroll from './pages/enroll';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<AboutUs />} />
       <Route path="/services" element={<Services />} />
       <Route path="/people" element={<People />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/donate" element={<Donate />} />
       <Route path="/enroll" element={<Enroll />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
