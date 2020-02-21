import React, { useState, useEffect } from 'react';

const EditCab = recordId => {
  fetch("http://tesla.localhost:3000/cabs/" + recordId, {
    method: "PATCH",
    headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODIzNTIyNTl9.MHLKEjhEen02JYU_QwUqywOdaKgqKzw07HkazkorxLQ'
    },
    body: JSON.stringify(
        {
            "cab":
            {
                "vehicle_number": "JH-199",
                "capacity": "8",
                "min_passengers": "4"
            }
        })
    }).then(response => {
            console.log(response);  
            });  

}

export default EditCab;