import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import chats from '../data';

const ChatWindow = () => {
  const { id } = useParams();
  const [chat, setChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Find the chat based on the ID from URL
  useEffect(() => {
    const foundChat = chats.find(c => c.id === parseInt(id));
    if (foundChat) {
      setChat(foundChat);
      setMessages(foundChat.messages);
    }
  }, [id]);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Function to format the timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Function to handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  if (!chat) {
    return <div className="loading">Loading chat...</div>;
  }

  return (
    <div className="chat-window-container">
      <div className="chat-window-header">
        <Link to="/" className="back-button">
          &larr; Back
        </Link>
        <h2>{chat.name}</h2>
      </div>

      <div className="messages-container">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`message ${message.sender === 'You' ? 'message-sent' : 'message-received'}`}
          >
            <div className="message-content">
              <div className="message-sender">{message.sender}</div>
              <div className="message-text">{message.text}</div>
              <div className="message-time">{formatTime(message.timestamp)}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;