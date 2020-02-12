import React, { useState } from 'react';
import {Button, InputGroup,Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

function Add_Cab() {
  const [cabNumber, setCabNumber] = useState('');
  const [cabMinPassengerRequired, setCabMinPassengerRequired] = useState('');
  const [cabCapacity, setCabCapacity] = useState('');

  // Submit Event for Add Cab Button
  const submit = () => {
    const cab = {
      vehicle_number: cabNumber,
      capacity: cabCapacity,
      min_passengers: cabMinPassengerRequired,
    };
    debugger
    fetch('http://172.60.1.137:3000/cabs', {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cab),
    }).then((response) => { console.log(response); });
  };

  return (
    <div>
      <div className="card col-sm-7">
        <div className="card__container">
          <div>
            <h1 className="card__title ">Add Cab to Organization</h1>
          </div>
          <br />
          <div className="row ">
            <InputGroup className="row-md-8 offset-md-2">
              <Label className="col-md-4" for="exampleCabNumber">Cab Number : </Label>
              <Input
                className="col-md-6"
                placeholder="Enter vehicle Number"
                type="text"
                name="cab_number"
                value={cabNumber}
                onChange={(e) => setCabNumber(e.target.value)}
              />
            </InputGroup>
            </div>
            <br />

          <div className="row">
            <InputGroup className="row-md-8 offset-md-2">
              <Label className="col-md-4" for="exampleCabNumber">Cab Capacity : </Label>
              <Input
                className="col-md-6"
                placeholder="Enter Vehicle Capacity"
                type="text"
                name="cab_capacity"
                value={cabCapacity}
                onChange={(e) => setCabCapacity(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />
          <div  className="row">
            <InputGroup className="row-md-8 offset-md-2">
            <Label className="col-md-4" for="exampleMinimumPassengerRequired">Minimum Passenger :</Label>
              <Input
                className="col-md-6"
                placeholder="Enter Minimum Passenger Required"
                type="text"
                name="cab_capacity"
                value={cabMinPassengerRequired}
                onChange={(e) => setCabMinPassengerRequired(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />
          <br />
          <Button className="btn-lg col-md-4 offset-md-4" color="success" size="sm" onClick={submit}>Add Cab</Button>
          <br />
        </div>
      </div>
    </div>
 );
}

export default Add_Cab;
