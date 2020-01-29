import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import { Button, InputGroup, Input } from 'reactstrap';

const UserSignup = () => (
  <div>
    <div className="card col-sm-7">
      <div className="card__container">
        <div>
          <h1 className="card__title">User Signup</h1>
        </div>
        <br />
        <div className="row">
          <InputGroup className="col-sm-6">
            <Input placeholder="first name" />
          </InputGroup>
          <br />
          <InputGroup className="col-sm-6">
            <Input placeholder="last name" />
          </InputGroup>
        </div>
        <br />
        <div className="row">
          <InputGroup className="col-sm-6">
            <Input placeholder="email" />
          </InputGroup>
          <br />
          <InputGroup className="col-sm-6">
            <Input placeholder="contact no" />
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
            <Input placeholder="password" type="password" />
          </InputGroup>
          <InputGroup className="col-sm-6">
            <Input placeholder="confirm password" type="password" />
          </InputGroup>
        </div>
        <br />
        <Button className="add__btn" color="success" size="sm">Sign Up</Button>
        <br />
      </div>
    </div>
  </div>
);

export default UserSignup;
