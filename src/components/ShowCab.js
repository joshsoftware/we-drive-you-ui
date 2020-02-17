import React, { useState, useEffect } from 'react';
import DeleteCab from './DeleteCab.js';
import EditCab from './EditCab.js';

const ShowCab = () => {
    const [list, setList]=useState([])
    useEffect(() => {
        fetch ('http://josh.localhost:3001/cabs', {
            method: 'GET', 
            headers: {
                Accept: 'application/cab-tab.com; version=1',
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE1ODE5Njg3OTB9.bzM1LhwfJTPPlbcTlO3v9nO5WdOSSX_abwIrmwhlo3A'
        }})
        .then((response) => response.json())
        .then((response) => setList(response.data.data))
    }, [])

    return (
        <div>
            <h1>Listing Cabs</h1>
            {console.log(list)}
            <table>

                <tr>
                    <th>
                        Cab id
                    </th>
                    <th>
                        Vehicle number
                    </th>
                    <th>
                        Capacity
                    </th>
                    <th>
                        Minimum passengers
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            {list.map((l,i) => {
                return (
                    <tr key={i}>
                        <td>
                            {l.id}
                        </td>
                        <td>
                            {l.attributes.vehicle_number}
                        </td>
                        <td>
                            {l.attributes.capacity}
                        </td>
                        <td>
                            {l.attributes.min_passengers}
                        </td>
                        <td>
                        <a onClick={() => EditCab(l.id)} >Edit</a>
                        </td>
                        <td>
                            <a onClick={() => DeleteCab(l.id)} >Delete</a>
                        </td>
                    </tr>
                )
            })}
            </table>
        </div>
    )   
}

export default ShowCab;