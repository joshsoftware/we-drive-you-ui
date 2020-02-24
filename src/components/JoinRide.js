import React, { useState, useEffect } from 'react';
import {
  Container, Form, Row, Col, Button, Label, Input,
} from 'reactstrap';
import Select from 'react-select';
import sub from './subdomain';


function JoinRide({ record }) {
  const [location, setLocation] = useState({
    label: 'Select Location',
    value: -1,
    disabled: 'yes',
  });

  // Fetching Cab List in options variable
  const options = record.hops.map((loc) => ({ value: loc.id, label: loc.location }));

  console.log('options=========>', options);
  // Handler for Managing Chnages Select DropDown
  const handleLocationChange = (selectedOption) => {
    setLocation(selectedOption);
    console.log('location =====>', location);
  };

  // const handle = () => {
  //  setStat(!stat);
  // }
  // Submit Event for Save Ride Button
  const join_ride = () => {
    const ride_request = {
      user_id: 3,
      hop_id: location.value,
    };
    fetch(`${sub()}.localhost:3000/ride_request/`, {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(ride_request),
    })
      .then((response) => response.json())
      .then((ParsedResponse) => {
        alert(ParsedResponse.message);
      });
  };

  return (
    <Container className="App" style={{ width: '100%' }}>
      <Row>
        <Col sm="12" md={{ size: 12 }}>
          <h2 style={{ color: 'blue' }}>Ride Details</h2>
        </Col>
      </Row>
      <br />
      <Form className="form">
        <Row>
          <Col sm="6" md={{ size: 4 }}>
            <Label>Vehicle Number :</Label>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <Input
              type="text"
              name="vehicle_number"
              value={record.cab.vehicle_number}
              disabled="true"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6" md={{ size: 4 }}>
            <Label>Available Seats :</Label>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <Input
              type="text"
              name="text"
              value={record.available_seats}
              disabled="true"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6" md={{ size: 4 }}>
            <Label>Time Slot :</Label>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <Input
              type="text"
              name="time"
              value={record.time}
              disabled="true"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6" md={{ size: 4 }}>
            <Label>Select Location :</Label>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <Select
              value={location}
              onChange={handleLocationChange}
              options={options}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button style={{ width: 300 }} onClick={join_ride} color="success">
              Join Ride
            </Button>
          </Col>
        </Row>

        <br />
      </Form>
    </Container>
  );
}

export default JoinRide;
