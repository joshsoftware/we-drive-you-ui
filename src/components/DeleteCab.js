import React, { useState, useEffect } from 'react';

const DeleteCab = recordId => {
    fetch("http://tesla.localhost:3000/cabs/" + recordId, {
      method: "DELETE",
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODIzNTIyNTl9.MHLKEjhEen02JYU_QwUqywOdaKgqKzw07HkazkorxLQ'
        }}).then(response => {
            console.log(response);  
            });  
}

export default DeleteCab;