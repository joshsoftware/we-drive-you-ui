import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import { Button, InputGroup, Input } from 'reactstrap';

function UserSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');


  const submit = () => {
    const user = {
      first_name: firstName,
      last_name: lastName,
      email_id: emailId,
      contact_no: contactNo,
      password,
      role_id: 2,
    };
    // console.log(User);

    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input
                placeholder="last name"
                type="text"
                name="last_name"
                value={lastName}
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
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input
                placeholder="contact no"
                type="number"
                name="contact_no"
                value={contactNo}
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
                value={password}
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
