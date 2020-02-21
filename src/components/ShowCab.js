import React, { useState, useEffect } from 'react';
import DeleteCab from './DeleteCab.js';
import EditCab from './EditCab.js';

const ShowCab = () => {
    const [list, setList]=useState([])
    useEffect(() => {
        fetch ('http://tesla.localhost:3000/cabs', {
            method: 'GET', 
            headers: {
				Accept: "application/cab-tab.com; version=1",
				"Access-Control-Allow-Origin": "http://tesla.localhost:3001",
				Authorization:
					"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODIzNTIyNTl9.MHLKEjhEen02JYU_QwUqywOdaKgqKzw07HkazkorxLQ"
			}})
        .then((response) => response.json())
        .then((response) => setList(response.data.data))
    }, [])

    return (

        <div class="container">
        <div class="row">
            <div class="col-sm-1"></div>         
            <div class="col-sm-10">
                <center><h1>Listing Cabs</h1></center>
                {console.log(list)}
                <table class="table table-hover" >
                    <thead class="black white-text">
                        <tr>
                            <th>Cab id</th>
                            <th>Vehicle number</th>
                            <th>Capacity</th>
                            <th>Minimum passengers</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {list.map((l,i) => {
                            return (
                                <tr key={i}>
                                    <td>{l.id}</td>
                                    <td>{l.attributes.vehicle_number}</td>
                                    <td>{l.attributes.capacity}</td>
                                    <td>{l.attributes.min_passengers}</td>
                                    <td><a onClick={() => EditCab(l.id)} >Edit</a></td>
                                    <td><a onClick={() => DeleteCab(l.id)} >Delete</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> 
            <div class="col-sm-1"></div>
        </div>
        </div>
        
    )   
}

export default ShowCab;