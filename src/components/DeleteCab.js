import React, { useState, useEffect } from 'react';

const DeleteCab = recordId => {
    fetch("http://josh.localhost:3001/cabs/" + recordId, {
      method: "DELETE",
      headers: {
        Accept: 'application/cab-tab.com; version=1',
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE1ODE5Njg3OTB9.bzM1LhwfJTPPlbcTlO3v9nO5WdOSSX_abwIrmwhlo3A'
        }}).then(response => {
            console.log(response);  
            });  
  }

export default DeleteCab;