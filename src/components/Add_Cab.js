import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import {Button, InputGroup,Label, Input} from 'reactstrap';

function Add_Cab() {
  const [cabNumber, setCabNumber] = useState('');
  const [cabCapacity, setCabCapacity] = useState('');

  // Submit Event for Add Cab Button
  const submit = () => {
    const user = {
      cab_number: cabNumber,
      cab_capacity: cabCapacity,
    };
    debugger
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
            <h1 className="card__title">Add Cab to Organization</h1>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-md-6">
              <Label for="exampleCabNumber">Cab Number : </Label>&nbsp;&nbsp;&nbsp;
              <Input
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
            <InputGroup className="col-md-6">
              <Label for="exampleCabNumber">Cab Capacity : </Label>&nbsp;&nbsp;&nbsp;
              <Input
                placeholder="Enter Vehicle Capacity"
                type="text"
                name="cab_capacity"
                value={cabCapacity}
                onChange={(e) => setCabCapacity(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />
          <br />
          <Button className="add__btn" color="success" size="sm" onClick={submit}>Add</Button>
          <br />
        </div>
      </div>
    </div>
 );
}

export default Add_Cab;
