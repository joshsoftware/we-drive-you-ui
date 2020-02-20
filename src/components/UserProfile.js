import React, { useState, useEffect } from 'react';
import {
  Card, Form, Row, Col, Button, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import sub from './subdomain';

function UserShow() {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [contactNo, setContactNo] = useState('');

  useEffect(()=>{
    fetch(sub()+'.localhost:3000/users/'+localStorage.getItem('user_id'), {
      method: 'GET',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) throw new Error(resp.status);
        else return resp.json();
      })
      .then((resp) => {
        console.log(resp.data.data.attributes);
        setUser(resp.data.data.attributes);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmailId(user.email_id);
        setContactNo(user.contact_no);
      // dispatch(loginUser(data.user));
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  });

  const update = () => {
    const User = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email_id: emailId,
        contact_no: contactNo,
      },
    };

    fetch(sub()+'.localhost:3000/users/14', {
      method: 'PATCH',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(User),
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
    <Card style={{ width: '50%' }}>

      <br />
      <Form className="form">
        <Row>
          <Col md={4}>
            <Label>First Name :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Input
              type="text"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Label>Last Name:</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Input
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
            <Label>Email :</Label>
          </Col>
          <Col md={6}>
            <Input
              type="email"
              name="email_id"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Label>Contact :</Label>
          </Col>
          <Col md={6}>
            <Input
              type="number"
              name="contact_no"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ offset: 5 }}>
            <Button color="success" size="md" onClick={update}>
              Edit
            </Button>
          </Col>
        </Row>
        <br />
      </Form>
    </Card>
  );
}

export default UserShow;
