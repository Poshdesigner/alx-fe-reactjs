// src/App.jsx
import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profile Card</h1>
        
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography. Enjoys outdoor adventures and capturing beautiful moments in nature."
        />
        
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Software developer passionate about AI and machine learning. Loves coding and coffee."
        />
        
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Musician and traveler. Plays guitar and has visited over 20 countries."
        />
      </header>
    </div>
  );
}

export default App;