import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'reactstrap';
import JoinRide from './JoinRide';
import ModalComponent from './Modal';
import sub from './subdomain';


function RideRequest() {
  const [rideRecord, setRideRecord] = useState([]);
  const [ride, setRide] = useState();
  const [show_join_ride_modal, setJoinRideModal] = useState(false);
  const [rideRequest, setRideRequest] = useState([]);
  const currentUser = 3;
  const status = true;


  const join_toggle = () => setJoinRideModal(!show_join_ride_modal);

  useEffect(() => {
    fetch(`${sub()}.localhost:3000/rides/`, {
      method: 'GET',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),

      },
    })
      .then((jsonResponse) => jsonResponse.json())
      .then((parsedResponse) => {
        console.log(parsedResponse.data.data);
        setRideRecord(parsedResponse.data.data);
      })
      .catch((error) => {
        console.error('Error');
      });

    fetch(`${sub()}.localhost:3000/ride_request/${currentUser}`, {
      method: 'GET',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((jsonResponse) => jsonResponse.json())
      .then((parsedResponse) => {
        setRideRequest(parsedResponse.data.data);
      })
      .catch((error) => {
        console.error('Error');
      });
  }, []);

  const options = rideRequest.map((ride_req) => ({
    ride_id: ride_req.attributes.hop_id,
  }));

  const join_ride = (record) => {
    setRide(record);
    setJoinRideModal(true);
  };

  const record_list = rideRecord.map((cab_no) =>
    // joinStatus.push({status: false});
    ({
      id: cab_no.id,
      available_seats: cab_no.attributes.available_seats,
      time: cab_no.attributes.time,
      cab: cab_no.attributes.cab.data.attributes,
      hops: cab_no.attributes.hops.data.map((hop) => ({
        id: hop.id,
        location: hop.attributes.location,
        credit: hop.attributes.credit,
        sequence_id: hop.attributes.sequence_id,
      })),
    }));


  return (
    <Container>
      <ModalComponent
        title="Update Ride Details"
        show={show_join_ride_modal}
        toggle={join_toggle}
      >
        <JoinRide record={ride} />
      </ModalComponent>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Vehicle Number</th>
            <th>Available Seats</th>
            <th>Scheduled Time</th>
            <th>Route</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {record_list.map((record, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{record.cab.vehicle_number}</td>
              <td>{record.available_seats}</td>
              <td>{record.time}</td>
              <td>
                {record.hops.map((route, seq) => (
                  <li>{`${route.sequence_id}. --- ${route.location}`}</li>
                ))}
              </td>
              <td>
                <Button color="primary" onClick={() => join_ride(record)}>
                  Join
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default RideRequest;
