import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import { Button, InputGroup, Input } from 'reactstrap';

const Login = () => (
  <div>
    <div className="card col-sm-4">
      <div className="card__container">
        <div>
          <h1 className="card__title">Login</h1>
        </div>
        <InputGroup size="sm">
          <Input placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup size="sm">
          <Input placeholder="password" type="password" />
        </InputGroup>
        <br />
        <Button className="add__btn" color="success" size="sm">Login</Button>
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

export default Login;
