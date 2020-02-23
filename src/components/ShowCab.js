import React, { useState, useEffect } from 'react';
import DeleteCab from './DeleteCab';
import EditCab from './EditCab';
import sub from './subdomain';

const ShowCab = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${sub()}.localhost:3000/cabs`, {
      method: 'GET',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Access-Control-Allow-Origin': 'http://tesla.localhost:3001',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((response) => setList(response.data.data));
  }, []);

  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <center><h1>Listing Cabs</h1></center>
          <table className="table table-hover">
            <thead className="black white-text">
              <tr>
                <th>Cab id</th>
                <th>Vehicle number</th>
                <th>Capacity</th>
                <th>Minimum passengers</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {list.map((l, i) => (
                <tr key={i}>
                  <td>{l.id}</td>
                  <td>{l.attributes.vehicle_number}</td>
                  <td>{l.attributes.capacity}</td>
                  <td>{l.attributes.min_passengers}</td>
                  <td><a onClick={() => EditCab(l.id)}>Edit</a></td>
                  <td><a onClick={() => DeleteCab(l.id)}>Delete</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-sm-1" />
      </div>
    </div>

  );
};

export default ShowCab;
