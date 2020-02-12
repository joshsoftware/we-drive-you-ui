import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import OrganizationSettings from './components/Organizationsetting';
import FetchRides from './components/addRide';
import AddSideBar from './components/Sidebar';
import AddNavBar from './components/Navbar';
import Hello1 from './components/Hello';
import { Button } from 'reactstrap';

const App = () => {
  return (
    <Router>
      <AddNavBar />
      <Route path='/home'>
        <Hello1 />
      </Route>

      <Route path ='/ride'>
        <FetchRides />
      </Route>
    
      <Route path="/credit">
        <FetchRides />
      </Route>

      <Route path="/settings">
        <OrganizationSettings />
      </Route>
    </Router>

  );
}

export default React.memo(App);
