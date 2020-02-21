import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import OrganizationSettings from './components/Organizationsetting';
import FetchRides from './components/addRide';
import AddSideBar from './components/Sidebar';
import AddNavBar from './components/Navbar';
import Login from './components/login';
import UserProfile from './components/UserProfile';
import UserSignup from './components/UserSignUp'; 
const App = () => {
  return (
    <Router >
     <Route path ='/login'>
        <Login />
      </Route>
       <Route path ='/dashboard'>
        <AddNavBar />
      </Route>
         <Route path ='/signup'>
        <UserSignup />
      </Route>

       <Route path = "/users/14">
        <UserProfile />
      </Route>
      <Route path = "/Settings">
        <OrganizationSettings />
      </Route>
      <Route path ='/ride'>
        <FetchRides />
      </Route>
    </Router>

  );
}

export default React.memo(App);
