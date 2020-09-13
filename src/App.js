import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/main/Navbar/Navbar';
import Header from './components/main/Header/Header.jsx';
import Profile from './components/content/Profile/Profile';
import DialogsContainer from './components/content/Dialogs/DialogsContainer';
import UsersContainer from './components/content/Users/UsersContainer';

function App() {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile />}/>
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/users" render={() =>  <UsersContainer />}/>
        </div>
      </div>
  );
}

export default App;
