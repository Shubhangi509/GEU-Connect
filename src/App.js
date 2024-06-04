import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ChatForum from './ChatForum';
import './App.css'; 
import PlacementPrep from './PlacementPrep';
import Login from './Login';
import Ats from './Ats';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat-forum" element={<ChatForum />} />
          <Route path="/placement-prep" element={<PlacementPrep/>}/>
          <Route path="/ats-score" element={<Ats />} />
          <Route path="/chat-forum/placement-prep" element={<PlacementPrep/>}/>
        </Routes>
    </Router>
  );}
export default App;
