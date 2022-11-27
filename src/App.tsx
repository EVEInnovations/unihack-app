import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './routes/homepage';
import Explore from './routes/explore';
import Events from './routes/events';
import Goodies from './routes/goodies';
import Cafe from './routes/cafe';
import Fav from './routes/fav';

import fav from "./data/favourites.json"

function App() {
  // window.localStorage.setItem("favourites", JSON.stringify(fav).substring(1, JSON.stringify(fav).length - 1));
  window.localStorage.setItem('started', 'false');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/goodies" element={<Goodies/>} />
        <Route path="/favourites" element={<Fav/>} /> {/* TODO: add favourites system */}
        <Route path="/about" element={<></>} /> {/* TODO: add about page */} 
        <Route path="/cafe/:id" element={<Cafe/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
