import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Link from'./components/Link'
// import OrganisationSignUp from'./components/OrganisationSignUp'
import Login from './components/Login';
import UserSignup from './components/UserSignUp';

function App() {
  return (
    <>
      <Login />
      <UserSignup />
    </>
  );
}

export default App;
