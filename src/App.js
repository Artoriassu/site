import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from  './components/Login/Login'

function App(props) {
  return (
    <div className='app-wrapper' >
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/settings" />

        <Route path="/login"
          render={() => <LoginPage />} />
      </div>
    </div>
  );
}

export default App;
