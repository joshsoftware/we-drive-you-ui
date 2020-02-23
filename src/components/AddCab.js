import React, { useState } from 'react';
import {
  Card, Form, Row, Col, Button, Label, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import sub from './subdomain';

function AddCab() {
  const emptyCabElements = {
    cab_no: '',
    min_passenger_req: '',
    cab_capacity: '',
  };
  const [cabElements, setCabElements] = useState({ ...emptyCabElements });

  const handleCabElementChange = (evt) => {
    const { value } = evt.target;
    setCabElements({ ...cabElements, [evt.target.name]: value });
  };

  const submit = () => {
    const cab = {
      vehicle_number: cabElements.cab_no,
      capacity: cabElements.cab_capacity,
      min_passengers: cabElements.min_passenger_req,
    };
    fetch(`${sub()}.localhost:3000/cabs`, {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ cab }),
    }).then((response) => response.json)
      .then((ParsedResponse) => {
        alert(ParsedResponse.message);
      });
  };

  return (
    <Card className="App" style={{ width: '50%' }}>
      <Row>
        <Col sm="12" md={{ size: 12 }}>
          <h2 style={{ color: 'blue' }}>Add Cab To Organization</h2>
        </Col>
      </Row>
      <br />
      <Form className="form">
        <Row>
          <Col md={4}>
            <Label>Vehicle Number :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Input
              type="text"
              name="cab_no"
              value={cabElements.cab_no}
              onChange={handleCabElementChange}
              placeholder="Enter Cab Number"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Label>Vehicle Capacity :</Label>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 2 }}>
            <Input
              type="number"
              name="cab_capacity"
              id="cab_capacity"
              onChange={handleCabElementChange}
              placeholder="Enter Cab Capacity"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6}>
            <Label>Minimum Passenger Required :</Label>
          </Col>
          <Col md={6}>
            <Input
              type="number"
              name="min_passenger_req"
              value={cabElements.min_passenger_req}
              onChange={handleCabElementChange}
              placeholder="Enter Minimum Expectancy"
            />
          </Col>
        </Row>
        <br />
        <Button color="success" onClick={submit}>
          Add Cab
        </Button>
      </Form>
    </Card>
  );
}

export default AddCab;
