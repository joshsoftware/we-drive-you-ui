import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import { Button, InputGroup, Input } from 'reactstrap';

const Login = () => {
  const [EmailId, setEmailId] = useState('');
  const [Password, setPassword] = useState('');
  // const submit = () => {
  //   User = {
  //     login:{
  //       email: EmailId,
  //       password :Password
  //     }
  //   };
  // userLoginAction(User, dispatch);
  // }

return(
<div>
  <div className="card col-sm-4">
  <div className="card__container">
    <div>
    <h1 className="card__title">Login</h1>
    </div>
  <InputGroup size="sm">
    <Input
    placeholder="email"
    type="email"
    name="email_id"
    // value={EmailId}
    // onChange={(e) => setEmailId(e.target.value)}
    />
  </InputGroup>
  <br />
  <InputGroup size="sm">
    <Input
    placeholder="password"
    type="password"
    name="password"
    // value={Password}
    // onChange={(e) => setPassword(e.target.value)}
    />
  </InputGroup>
  <br />
    <Button className="add__btn" color="success" size="sm" >Login</Button>
  <br />
  <div>
  <a className="link" href="youtube.com">Forgot password</a>
  </div>
  <br />
  <div>
  <a className="link" href="youtube.com">Create new account</a>
  </div>
  <br />
  </div>
  </div>
</div>
);
}
export default Login;
