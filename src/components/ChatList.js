import React from 'react';
import { Link } from 'react-router-dom';
import chats from '../data';

const ChatList = () => {
  // Function to format the timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Function to format the date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="chat-list-container">
      <div className="chat-list-header">
        <h1>Chats</h1>
        <Link to="/new" className="new-chat-button">
          New Chat
        </Link>
      </div>
      
      <div className="chat-list">
        {chats.map(chat => (
          <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-item">
            <div className="chat-item-content">
              <h3 className="chat-name">{chat.name}</h3>
              <p className="chat-last-message">{chat.lastMessage}</p>
            </div>
            <div className="chat-item-time">
              <span className="chat-date">{formatDate(chat.lastActivity)}</span>
              <span className="chat-time">{formatTime(chat.lastActivity)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatList;