import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Import your page components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
