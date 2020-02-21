import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input, Card, Form, Row, Col, Label } from 'reactstrap';
import { useDispatch } from 'react-redux';
import './component.css';
// import { BrowserRouter as Redirect } from 'react-router-dom';
import userLoginAction from '../redux/userLoginAction';
import { useHistory } from 'react-router-dom';

function Login() {
  // const [status, setStatus] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [Password, setPassword] = useState('');
  let User = {};
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = () => {
    User = {
      login: {
        email_id: EmailId,
        password: Password,
      },
    };
    userLoginAction(User, dispatch);

    if (localStorage.getItem('token'))
       return history.push("/dashboard");
  };

  return (
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
              defaultValue={EmailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup size="sm">
            <Input
              placeholder="password"
              type="password"
              name="password"
              defaultValue={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <br />
          <Button className="add__btn" color="success" size="sm" onClick={submit}>Login</Button>
          <br />
          <div>
            <a className="link" href="youtube.com">Forgot password</a>
          </div>
          <br />
          <div>
            <a className="link" href="/signup">Create new account</a>
          </div>
          <br />
        </div>
      </div>
    </div>

  );
}
export default Login;
