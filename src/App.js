import React from 'react';
import './App.css';
import Navbar from './components/main/Navbar/Navbar';
import Header from './components/main/Header/Header.jsx';
import Profile from './components/content/Profile/Profile';
import Dialogs from './components/content/Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Profile />
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
