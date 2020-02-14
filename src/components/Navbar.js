 import React, { useState } from 'react';
 import logo from '../images/logo1.png';
const AddNavBar = () => { 
  if (!true)
  {
  return(
    <>
    <h1 align= "center">CAB TAB</h1>  

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<a className="navbar-brand text-white" href="#"></a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
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
<a className="nav-link text-white tet-uppercase ml-3" href="/home">
Home&nbsp;<i class="fas fa-home"></i>
<span class="sr-only">(current)</span></a>
</li>

<li className="nav-item">
<a className="nav-link text-white tet-uppercas ml-3" href="/ride">
Ride</a>
</li>

<li className="nav-item">
<a className="nav-link text-white tet-uppercase ml-3" href="credit">
Creadit Points</a>
</li>

<li className="nav-item">
<a className="nav-link text-white tet-uppercase ml-3" href="Settings">
Settings</a>
</li>

<li className="nav-item">
<a className="nav-link text-white tet-uppercase ml-3" href="Settings">
Help</a>
</li>

</ul>

</div>
</nav>
    </>

  );
}
else 
{
  return(
    <>
    <h1>welcome</h1>

    </>
    );
}
}
 export default AddNavBar;


