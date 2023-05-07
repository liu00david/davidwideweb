import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages'
import WhatsNext from './pages/whatsnextpage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/home" /> }/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/whatsnext" element={<WhatsNext />} />
        <Route path="*" element={ <Navigate to="/home" /> }/>
      </Routes>
    </Router>
  );
}

export default App;
