import React, { useState, useEffect } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Label,
  Input,
} from 'reactstrap';
import Select from 'react-select';
import AddLocation from './AddLocation';
import sub from './subdomain';

function UpdateRide({ record }) {
  const emptyCabRoute = { location: '', credit: '', sequence_id: '' };
  const [cabRoute, setCabRoute] = useState(record.hops);
  const [cabNumberList, setCabNumberList] = useState([]);
  const [timeSlot, setTimeSlot] = useState(record.time);
  const [cabNumber, setCabNumber] = useState({
    value: [record.cab.id, record.available_seats],
    label:
		`${record.cab.vehicle_number} [ Capacity : ${record.cab.capacity} ]`,
  });

  // Fetching Cab List in options variable
  const options = cabNumberList.map((cab_no) => ({
    value: [cab_no.attributes.id, cab_no.attributes.capacity],
    label: `${cab_no.attributes.vehicle_number} [ Capacity : ${cab_no.attributes.capacity} ]`,
  }));

  const addLocation = () => {
    setCabRoute([...cabRoute, { ...emptyCabRoute }]);
  };

  // Hook For Fetching Data Into CabNumberList
  useEffect(() => {
    fetch(`${sub()}.192.168.1.168:3000/cabs`, {
      method: 'GET',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((jsonResponse) => jsonResponse.json())
      .then((parsedResponse) => {
        setCabNumberList(parsedResponse.data.data);
      })
      .catch((error) => {
        console.error('Error');
      });
  }, []);

  // Handler for Managing Chnages Select DropDown
  const handleCabChange = (selectedOption) => {
    setCabNumber(selectedOption);
  };

  // Handler for Managing Changes in Location and Credit Field
  const handleRouteChange = (e) => {
    const updatedRoutes = [...cabRoute];
    updatedRoutes[e.target.dataset.idx][e.target.dataset.field] =	e.target.value;
    if (e.target.dataset.field === 'location') {
      updatedRoutes[e.target.dataset.idx].sequence_id = parseInt(e.target.dataset.idx) + 1;
    }
    setCabRoute(updatedRoutes);
  };

  // Submit Event for Save Ride Button
  const submit = () => {
    const rides = {
      cab_id: cabNumber.value[0],
      time: timeSlot,
      hops_attributes: cabRoute,
      available_seats: cabNumber.value[1],
    };
    fetch(`${sub()}.localhost:3000/rides/${record.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(rides),
    }).then((response) => {
      console.log(response);
      return response.json();
    })
      .then((ParsedResponse) => {
        alert(ParsedResponse.message);
      });
  };

  return (
    <Container className="App" style={{ width: '100%' }}>
      <Row>
        <Col sm="12" md={{ size: 12 }}>
          <h2 style={{ color: 'blue' }}>Update Ride Details</h2>
        </Col>
      </Row>
      <br />
      <Form className="form">
        <Row>
          <Col sm="6" md={{ size: 4 }}>
            <Label>Vehicle Number :</Label>
          </Col>
          <Col sm="12" md={{ size: 6 }}>
            <Select
              value={cabNumber}
              onChange={handleCabChange}
              options={options}
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
              type="time"
              name="time"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              placeholder="Enter Cab Capacity"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="12" md={{ size: 12 }}>
            <legend className="text-info">Set Route</legend>
          </Col>
        </Row>
        {cabRoute.map((val, idx) => (
          <AddLocation
            key={`cabRoute-${idx}`}
            idx={idx}
            cabRoute={cabRoute}
            handleRouteChange={handleRouteChange}
          />
        ))}
        <Row>
          <Col>
            <Button color="primary" onClick={addLocation}>
              Add Location
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button style={{ width: 300 }} color="success" onClick={submit}>
              Save Ride
            </Button>
          </Col>
        </Row>

        <br />
      </Form>
    </Container>
  );
}

export default UpdateRide;
