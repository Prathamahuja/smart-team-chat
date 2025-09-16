import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatWindow />} />
          <Route path="/new" element={<NewChat />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;