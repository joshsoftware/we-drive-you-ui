import React, { useState, useEffect } from 'react';
import {
  Card, Form, Row, Col, Button, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import sub from './subdomain';


function UserShow() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch(`${sub()}.localhost:3000/users/${localStorage.getItem('user_id')}`, {
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
      // dispatch(loginUser(data.user));
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }, []);

  const update = () => {
    fetch(`${sub()}.localhost:3000/users/${localStorage.getItem('user_id')}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(user),
    })
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) throw new Error(resp.status);
        else return resp.json();
      })
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const {
    first_name, last_name, email_id, contact_no,
  } = user;

  return (
    <Card  style={{ width: '50%' }}>

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
              defaultValue={first_name}
              onChange={handleInputChange}
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
              defaultValue={last_name}
              onChange={handleInputChange}
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
              defaultValue={email_id}
              onChange={handleInputChange}
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
              defaultValue={contact_no}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={{ offset: 5 }}>
            <Button color="success" size="md" onClick={update}>
              Update
            </Button>
          </Col>
        </Row>
        <br />
      </Form>
    </Card>
  );
}

export default UserShow;
