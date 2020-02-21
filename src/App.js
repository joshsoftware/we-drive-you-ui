import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
// import OrganizationSettings from './components/Organizationsetting';
// import FetchRides from './components/addRide';
// import AddSideBar from './components/Sidebar';
// import AddNavBar from './components/Navbar';
//import ShowRides from './components/ShowRides';
import ShowCab from './components/ShowCab';
import Hello1 from './components/Hello';
//import Login from './components/login';
import { Button } from 'reactstrap';

// const App = () => {
//   return (
//     <Router>
//       <AddNavBar />
      
//       <Route path='/home'>
//         <Hello1 />
//       </Route>

//       <Route path ='/ride'>
//         <FetchRides />
//       </Route>
    
//       <Route path="/credit">
//         <FetchRides />
//       </Route>

//       <Route path="/settings">
//         <OrganizationSettings />
//       </Route>
//     </Router>

//   );
// }

const App = () => {

return(
  <>
  <ShowCab />
  </>
  );

}
export default React.memo(App);
