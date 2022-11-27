import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Homepage from './routes/homepage';
import Explore from './routes/explore';
import Events from './routes/events';
import Goodies from './routes/goodies';
import Cafe from './routes/cafe';

function App() {
  window.localStorage.setItem('started', 'false');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/goodies" element={<Goodies/>} />
        <Route path="/favourites" element={<></>} /> {/* TODO: add favourites system */}
        <Route path="/about" element={<></>} /> {/* TODO: add about page */} 
        <Route path="/cafe/:id" element={<Cafe/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
