import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import ExplorePage from './ExplorePage';

const App = () => {
  return (
    <Router>
      <div className="bg-[#fdf8f4] text-gray-800">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
