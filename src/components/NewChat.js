import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NewChat = () => {
  const [chatName, setChatName] = useState('');
  const [participants, setParticipants] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (chatName.trim() === '') {
      alert('Please enter a chat name');
      return;
    }
    
    // In a real app, this would be an API call to create a new chat
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // After "creating" the chat, navigate back to the chat list
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="new-chat-container">
      <div className="new-chat-header">
        <Link to="/" className="back-button">
          &larr; Back
        </Link>
        <h2>Create New Chat</h2>
      </div>
      
      <form className="new-chat-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="chatName">Chat Name</label>
          <input
            type="text"
            id="chatName"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
            placeholder="Enter chat name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="participants">Participants (optional)</label>
          <input
            type="text"
            id="participants"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            placeholder="Enter participant names, separated by commas"
          />
          <small>Leave empty for a public chat</small>
        </div>
        
        <div className="form-actions">
          <Link to="/" className="cancel-button">Cancel</Link>
          <button 
            type="submit" 
            className="create-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Chat'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewChat;