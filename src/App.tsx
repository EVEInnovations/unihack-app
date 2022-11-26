import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Homepage from './routes/homepage';
import Explore from './routes/explore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/events" element={<></>} />
        <Route path="/goodies" element={<></>} />
        <Route path="/favourites" element={<></>} />
        <Route path="/about" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
