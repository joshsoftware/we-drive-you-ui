import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OrganizationSettings from './components/OrganizationSetting';
import AddNavBar from './components/Navbar';
import Login from './components/login';
import UserProfile from './components/UserProfile';
import UserSignup from './components/UserSignUp';
import Hello from './components/Hello';
import AddCab from './components/AddCab';
import AddRide from './components/AddRide';
import ShowRides from './components/ShowRides';
import ShowCab from './components/ShowCab';
import OrganizationSignup from './components/OrganizationSignup';

const App = () => {
  const u = `/users/${localStorage.getItem('user_id')}`;

  return (

    <Router>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <AddNavBar />
        <Hello />
      </Route>
      <Route path="/organizationsignup">
        <OrganizationSignup />
      </Route>
      <Route path="/usersignup">
        <UserSignup />
      </Route>
      <Route path={u}>
        <AddNavBar />
        <UserProfile />
      </Route>
      <Route path="/settings">
        <AddNavBar />
        <OrganizationSettings />
      </Route>
      <Route path="/addride">
        <AddNavBar />
        <AddRide />
      </Route>
      <Route path="/addcab">
        <AddNavBar />
        <AddCab />
      </Route>
      <Route path="/rides">
        <AddNavBar />
        <ShowRides />
      </Route>
      <Route path="/cabs">
        <AddNavBar />
        <ShowCab />
      </Route>
    </Router>

  );
};


export default React.memo(App);
