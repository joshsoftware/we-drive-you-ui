import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// import OrganizationSettings from './components/Organizationsetting';
import FetchRides from './components/addRide';
import AddSideBar from './components/Sidebar';
import AddNavBar from './components/Navbar';
import Login from './components/login';
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <Router >
     <Route path ='/login'>
        <Login />
      </Route>
       <Route path ='/dashboard'>
        <AddNavBar />
      </Route>
       <Route path ='/user/14'>
        <UserProfile />
      </Route>
      <Route path ='/ride'>
        <FetchRides />
      </Route>
    </Router>

  );
}

// const App = () => {

// return(
//   <>
//    <Login/>
//     <UserProfile/>
//    // <Router>
      
//    //    <Route path='http://josh.localhost:3001'>
//    //      <Login/>
//    //    </Route>
//    //   </Router>
//   </> 
//   );

// }
export default React.memo(App);
