import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import { Button, InputGroup, Input} from 'reactstrap';

function Add_Driver() {
  const [driverFirstName, setDriverFirstName] = useState('');
  const [driverLastName, setDriverLastName] = useState('');
  const [driverEmailId, setDriverEmailId] = useState('');
  const [driverContactNo1, setDriverContactNo1] = useState('');
  const [driverContactNo2, setDriverContactNo2] = useState('');
  const [driverLicenseNo, setDriverLicenseNo] = useState('');

  // Submit Event for Add Driver Button
  const submit = () => {
    const user = {
      first_name: driverFirstName,
      last_name: driverLastName,
      email_id: driverEmailId,
      contact_no_1: driverContactNo1,
      contact_no_2: driverContactNo2,
      license_no: driverLicenseNo,
    };
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
            <h1 className="card__title">Add Driver to Organization</h1>
          </div>
          <br />
          <div className="row">
            <InputGroup className="col-sm-6">
              <Input
                placeholder="Driver's First Name"
                type="text"
                name="driver_first_name"
                value={driverFirstName}
                onChange={(e) => setDriverFirstName(e.target.value)}
              />
            </InputGroup>
            <br />
            <InputGroup className="col-sm-6">
              <Input
                placeholder="Driver's Last Name"
                type="text"
                name="driver_last_name"
                value={driverLastName}
                onChange={(e) => setDriverLastName(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />

          <div className="row">
            <InputGroup className="col-sm-6">
              <Input
                placeholder="Driver's Contact Number 1"
                type="number"
                name="driver_contact_1"
                value={driverContactNo1}
                onChange={(e) => setDriverContactNo1(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="col-sm-6">
              <Input
                placeholder="Driver's Contact Number 2"
                type="number"
                name="driver_contact_2"
                value={driverContactNo2}
                onChange={(e) => setDriverContactNo2(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />

          <div className="row">
            <InputGroup className="col-sm-12">
              <Input
                placeholder="Driver's Email ID"
                type="email"
                name="driver_email_id"
                value={driverEmailId}
                onChange={(e) => setDriverEmailId(e.target.value)}
              />
            </InputGroup>

          </div>
          <br />

          <div className="row">
            <InputGroup className="col-sm-12">
              <Input
                placeholder="Driver's License Number"
                type="text"
                name="driver_license_no"
                value={driverLicenseNo}
                onChange={(e) => setDriverLicenseNo(e.target.value)}
              />
            </InputGroup>

          </div>
          <br />
          <Button className="add__btn" color="success" size="sm" onClick={submit}>Add</Button>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Add_Driver;
