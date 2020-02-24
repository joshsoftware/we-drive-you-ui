import React from 'react';
import logo from '../images/logo1.png';

const AddNavBar = () => {
  const user = `/users/${localStorage.getItem('user_id')}`;
  if (localStorage.getItem('role') === 'passenger') {
    return (
      <>
        <h1 align="center">CAB TAB</h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">


              <li className="nav-item active">
                <a className="nav-link text-white tet-uppercase ml-3" href={user}>
                  Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercas ml-3" href="/rides">
                  Ride
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="/credit">
                  Creadit Points
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="help">
                  Help
                </a>
              </li>

               <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="/login">
                  Logout
                </a>
              </li>

            </ul>

          </div>
        </nav>
      </>

    );
  }
  if (localStorage.getItem('role') === 'admin') {
    return (
      <>
        <h1 align="center">CAB TAB</h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item active">
                <a className="nav-link text-white tet-uppercase ml-3" href={user}>
                  Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="/addride">
                  Ride
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="/addcab">
                  Cab
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="/help">
                  Help
                </a>
              </li>

                <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="/login">
                  Logout
                </a>
              </li>

            </ul>

          </div>
        </nav>
      </>

    );
  }
  return (
    <>
      <h1 align="center">PAGE NOT FOUND</h1>
    </>
  );
};
export default AddNavBar;
