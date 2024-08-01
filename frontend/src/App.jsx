import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FeedPage from './pages/Feed/FeedPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/about-us" element={<AboutUsPage />} /> 
        {/* Add a catch-all route for 404 errors */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
