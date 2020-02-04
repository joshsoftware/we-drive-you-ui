import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import { Button, InputGroup, Input } from 'reactstrap';

function UserSignup() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [ContactNo, setContactNo] = useState('');
  const [Password, setPassword] = useState('');
  let User = {};

  const submit = () => {
    User = {
      first_name: FirstName,
      last_name: LastName,
      email_id: EmailId,
      contact_no: ContactNo,
      password: Password,
      role_id: 2,
    };
    // console.log(User);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(User),
    }).then((response) => { console.log(response); });
  };

  return (
    <div>
      <div className="card col-sm-7">
        <div className="card__container">
          <div>
            <h1 className="card__title">User Signup</h1>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input
                placeholder="first name"
                type="text"
                name="first_name"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input
                placeholder="last name"
                type="text"
                name="last_name"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input
                placeholder="email"
                type="email"
                name="email_id"
                value={EmailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input
                placeholder="contact no"
                type="number"
                name="contact_no"
                value={ContactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input placeholder="invite code" />
            </InputGroup>
          </div>
          <br />
        Address
          <InputGroup>
            <Input placeholder="address line--1" />
          </InputGroup>
          <br />
          <InputGroup>
            <Input placeholder="address line--2" />
          </InputGroup>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input placeholder="city" />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input placeholder="state" />
            </InputGroup>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input placeholder="country" />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input placeholder="pin code" />
            </InputGroup>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input
                placeholder="password"
                type="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="col-sm-6">
              <Input placeholder="confirm password" type="password" />
            </InputGroup>
          </div>
          <br />
          <Button className="add__btn" color="success" size="sm" onClick={submit}>Sign Up</Button>
          <br />
        </div>
      </div>
    </div>
  );
}
export default UserSignup;
