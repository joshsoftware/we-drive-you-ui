import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './component.css'


const Login = props =>{
const {name, link} = props
return (
   <div>
      <div className="card col-sm-4">
          <div className="card__container">
              <div>
                <h1 className="card__title">Login</h1>
              </div>
              
              <div className="row">
                <input type="text" className="add__input" placeholder="Username" />
              </div>
              <div className="row">
                  <input type="password" className="add__input" placeholder="Password" />
              </div><br/>
              <div>
                 <button className="add__btn btn btn-success" onClick>Sign Up</button>
              </div><br/>
              <div>
                 <a className="link" href="">Forgot password</a>
              </div><br/>
              <div>
                 <a className="link" href="">Create new account</a>
              </div><br/>

            
          </div>
      </div>
  </div>
  );

}

export default Login;
