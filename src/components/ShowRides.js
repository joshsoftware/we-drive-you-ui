import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'reactstrap';
import UpdateRide from './UpdateRide';
import AddRide from './AddRide';
import ModalComponent from './Modal';
import sub from './subdomain';

function ShowRides() {
  const [rideRecord, setRideRecord] = useState([]);
  const [ride, setRide] = useState();
  const [showAddRecordModal, setAddModal] = useState(false);
  const [showUpdateRecordModal, setUpdateModal] = useState(false);

  const addToggle = () => setAddModal(!showAddRecordModal);
  const updateToggle = () => setUpdateModal(!showUpdateRecordModal);

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
        console.error('Error', error);
      });
  }, []);

  const editRecord = (record) => {
    setRide(record);
    setUpdateModal(true);
  };

  const options = rideRecord.map((cabNo) => ({
    id: cabNo.id,
    available_seats: cabNo.attributes.available_seats,
    time: cabNo.attributes.time,
    cab: cabNo.attributes.cab.data.attributes,
    hops: cabNo.attributes.hops.data.map((hop) => ({
      id: hop.id,
      location: hop.attributes.location,
      credit: hop.attributes.credit,
      sequence_id: hop.attributes.sequence_id,
    })),
  }));

  // Delete Ride Event handler
  const deleteRide = (recordId) => {
    fetch(`${sub()}.localhost:3000/rides/${recordId}`, {
      method: 'delete',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      alert('Post deleted successfully');
    });
  };

  return (
    <Container>
      <ModalComponent
        title="Update Ride Details"
        show={showUpdateRecordModal}
        toggle={updateToggle}
      >
        <UpdateRide record={ride} />
      </ModalComponent>

      <ModalComponent
        title="Add Ride To Organization"
        show={showAddRecordModal}
        toggle={addToggle}
      >
        <AddRide />
      </ModalComponent>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Vehicle Number</th>
            <th>Vehicle Capacity</th>
            <th>Scheduled Time</th>
            <th>Route</th>
            <th colSpan="2">
              <Button color="success" onClick={addToggle}>
                Add Ride
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {options.map((record, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{record.cab.vehicle_number}</td>
              <td>{record.available_seats}</td>
              <td>{record.time}</td>
              <td>
                {record.hops.map((route) => (
                  <li>{`${route.sequence_id}. --- ${route.location}`}</li>
                ))}
              </td>
              <td>
                <Button color="primary" onClick={() => editRecord(record)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button color="danger" onClick={() => deleteRide(record.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ShowRides;
