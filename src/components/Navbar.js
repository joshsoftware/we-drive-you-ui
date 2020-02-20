import React, { useState } from 'react';
import logo from '../images/logo1.png';

const AddNavBar = () => {
  if (true) {
    return (
      <>  
        <h1 align="center">CAB TAB</h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand text-white" href="#" />

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
                <a className="nav-link text-white tet-uppercase ml-3" href="/user/14">
                  Profile&nbsp;
                  <i className="fas fa-home" />
                  <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercas ml-3" href="/ride">
                  Ride
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="credit">
                  Creadit Points
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="Settings">
                  Settings
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white tet-uppercase ml-3" href="help">
                  Help
                </a>
              </li>

            </ul>

          </div>
        </nav>
      </>

    );
  }

  
};
export default AddNavBar;
