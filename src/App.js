import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/main/Navbar/Navbar';
import Header from './components/main/Header/Header.jsx';
import Profile from './components/content/Profile/Profile';
import Dialogs from './components/content/Dialogs/Dialogs';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
