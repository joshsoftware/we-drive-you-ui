import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';


const FetchRides = () => {

const [ users, setUsers] = useState([])
const [idFromButtonClick, setIdFromButtonClick] = useState()
//console.log(window.location.href);

useEffect(() => {
fetch('http://lvh.me:3000/rides',{
method: 'GET',
headers: {
'Accept': 'application/vnd.cab-tab.com; version=1'
}
}).then((jsonResponse) => {
console.log(jsonResponse);
return jsonResponse.json();
}).then((parsedResponse) => {
console.log({parsedResponse});
setUsers([...parsedResponse]);
}).catch((error)=>{
console.error("Error");
})
}, []);

const joinRide = (id) => {
//console.log(id)
fetch(`http://josh.localhost:3000/rides/${id}/ride_requests`,
{
method: 'POST',
headers:{
'Accept': 'application/vnd.cab-tab.com; version=1',
'Access-Control-Allow-Origin': 'http://localhost:3002',
'Content-Type': 'application/json'
},
body: JSON.stringify({
users: {
ride_id: id
}
})
}).then((jsonResponse) => {
console.log(jsonResponse);
return jsonResponse.json();
}).then((parsedResponse) => {
console.log({parsedResponse});
setUsers([...parsedResponse]);
}).catch((error)=>{
console.error("Error");
});

}
const handleClick = (id) => {
console.log(id)
//setIdFromButtonClick(id)
//console.log(idFromButtonClick)
joinRide(id)
}
return (
<Table striped>
<thead>
<tr>
<th>#</th>
<th>Cab_id</th>
<th>Time</th>
<th>Routes</th>
<th>Available_seats</th>
</tr>
</thead>
<tbody>
{
users.map((u,i) => {
return (
<tr>
<td>{u.id}</td>
<td>{u.cab_id}</td>
<td>{u.time}</td>
<td>
{
u.routes.map(rep =>
(
<li>{rep}</li>
)
)
}
</td>
<td>{u.available_seats}</td>
<Button color="primary" size="md" id={u.id} onClick={() => handleClick(u.id)}>Join Ride</Button>
</tr>
);

})

}
</tbody>
</Table>
// <table border="1">

);
}

export default React.memo(FetchRides);