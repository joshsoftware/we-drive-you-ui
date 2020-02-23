import sub from './subdomain';

const DeleteCab = (recordId) => {
  fetch(`${sub()}.localhost:3000/cabs/${recordId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/cab-tab.com; version=1',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  }).then((response) => {
    console.log(response);
  });
};

export default DeleteCab;
