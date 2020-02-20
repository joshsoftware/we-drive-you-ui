import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  Button, Card, Form, Row, Col, Label, Input,
} from 'reactstrap';
// import Select from 'react-select'
// import { AvForm, AvField } from 'availity-reactstrap-validation';

function UserSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const submit = () => {
    const user = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email_id: emailId,
        contact_no: contactNo,
        password,
        confirm_password: confirmPassword,
        role_id: 2,
        invite_code: inviteCode,
        addresses_attributes: [
          {
            address_line_1: address1,
            address_line_2: address2,
            city,
            state,
            country,
            pin_code: pinCode,

          },
        ],
      },
    };
    console.log(user);
    console.log(JSON.stringify(user));

    fetch('http://josh.localhost:4000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then((resp) => {
        console.log(resp);
        if (!resp.ok) throw new Error(resp.status);
        else return resp.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  };

  return (

    <Card className="App" style={{ width: '50%' }}>
      <Row>
        <Col md={12}>
          <h2 style={{ color: 'blue' }}>User Signup</h2>
        </Col>
      </Row>
      <br />
      <Form className="form">
        <Row>
          <Col md={6}>
            <Input
              placeholder="first name"
              type="text"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <br />
          <Col md={6}>
            <Input
              placeholder="last name"
              type="text"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Input
              placeholder="email"
              type="email"
              name="email_id"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Input
              placeholder="contact no"
              type="number"
              name="contact_no"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Input
              placeholder="confirm password"
              type="password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Input
              type="text"
              placeholder="invite code"
              name="invite_code"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Label>Address:</Label>
        </Row>
        <Row>
          <Col md={12}>
            <Input
              placeholder="address line--1"
              type="text"
              name="address_line_1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12}>
            <Input
              placeholder="address line--2"
              type="text"
              name="address_line_2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Input
              placeholder="city"
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Input
              placeholder="state"
              type="text"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Input
              placeholder="country"
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />

          </Col>
          <Col md={6}>
            <Input
              placeholder="pin code"
              type="text"
              name="pin_code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Button color="success" size="md" onClick={submit}>
         Signup
        </Button>
      </Form>
    </Card>
  );
}
export default UserSignup;
