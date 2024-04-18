import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Import your page components
import Hometoo from './pages/hometoo'; // Import your page components


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/home" element={<Hometoo />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
