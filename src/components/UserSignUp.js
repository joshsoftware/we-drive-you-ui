import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component.css'


const UserSignUp = props =>{
const {name, link} = props
return (

  <div>
      <div className="card col-sm-6">
          <div className="card__container">
              <div>
                <h1 className="card__title">User Signup</h1>
              </div>
              
              <div className="row">
                 <div className="col-sm-5"> <label className="card__label">Email Address :</label></div>
                 <div className="col-sm-offset-5 col-sm-7"> <input type="email" className="add__input from-control" /></div>
              </div>
              <div className="row">
               <div className="col-sm-5"><label className="card__label">Contact No :</label></div>
               <div className="col-sm-offset-5 col-sm-7"><input type="number" className="add__input" /></div>
              </div>
              <div className="row">
                <div className="col-sm-5"><label className="card__label">Employee Id :</label></div>
                <div className="col-sm-offset-5 col-sm-7"><input type="text" className="add__input" /></div>
              </div>
               <div className="row">
                <div className="col-sm-5"><label className="card__label">Location :</label></div>
                <div className="col-sm-offset-5 col-sm-7"><input type="text" className="add__input" /></div>
              </div>
               <div className="row">
                <div className="col-sm-5"><label className="card__label">Time :</label></div>
                <div className="col-sm-offset-5 col-sm-7"><input type="text" className="add__input" /></div>
              </div>
              <div className="row">
               <div className="col-sm-5"><label className="card__label">Password : </label></div>
               <div className="col-sm-offset-5 col-sm-7"><input type="password" className="add__input" /></div>
              </div> 
              <div className="row">
               <div className="col-sm-5"><label className="card__label">Confirm Password : </label></div>
                <div className="col-sm-offset-5 col-sm-7"><input type="password" className="add__input" /></div>
              </div>
              <div className='text-center'>
                 <input type="checkbox"/><label style={{fontSize:"11px"}}>I accept <a href="">term & condition</a></label>
              </div>
              <div>
                 <button className="add__btn btn btn-success" onClick>Sign Up</button>
              </div>
            
          </div>
      </div>
  </div>


  );

}

export default UserSignUp;
