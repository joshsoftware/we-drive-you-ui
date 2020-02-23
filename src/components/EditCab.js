import sub from './subdomain';

const EditCab = (recordId) => {
  fetch(`${sub()}.localhost:3000/cabs/${recordId}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/cab-tab.com; version=1',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(
      {
        cab:
            {
              vehicle_number: 'JH-199',
              capacity: '8',
              min_passengers: '4',
            },
      },
    ),
  }).then((response) => {
    console.log(response);
  });
};

export default EditCab;
