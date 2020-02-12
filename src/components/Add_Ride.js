import React, { useState, useEffect } from 'react';
import {Button, InputGroup, Label, Input} from 'reactstrap';
import AddLocation from './Add_Location';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

function AddRide() {
  const emptyCabRoute = { location: '', credit: '', sequence_id: '' };
  const [cabNumberList, setCabNumberList] = useState([]);
  const [cabNumber, setCabNumber] = useState({label: "Select Vehicle", value: -1, disabled: 'yes'});
  const [timeSlot, setTimeSlot] = useState('');
  const [cabRoute, setCabRoute] = useState([{...emptyCabRoute}]);
  const options = cabNumberList.map((cab_no) => { return {value: [cab_no.id, cab_no.capacity] , label: cab_no.vehicle_number+" [ Capacity : "+cab_no.capacity+" ]" }});

  const addLocation = () => {
    setCabRoute([...cabRoute,{...emptyCabRoute}]);
  }
  // debugger
  //Hook For Fetching Data Into CabNumberList
  useEffect(() => {
    fetch('http://172.60.1.137:3000/cabs',{
      method: 'GET',
      headers: {
        'Accept': 'application/cab-tab.com; version=1'
      }
    })
    .then((jsonResponse) => {
    return jsonResponse.json();
    })
    .then((parsedResponse) => {
    setCabNumberList([...parsedResponse.data]);
    })
    .catch((error)=>{
    console.error("Error");
    })
  }, []);
  
  //Handler for Managing Chnages Select DropDown
  const handleCabChange = (selectedOption) => {
     setCabNumber(selectedOption)
  }

  //Handler for Managing Changes in Location and Credit Field
  const handleRouteChange = (e) => {
    const updatedRoutes = [...cabRoute];
    updatedRoutes[e.target.dataset.idx][e.target.dataset.field] = e.target.value;
    if (e.target.dataset.field === "location")
    {
      updatedRoutes[e.target.dataset.idx]['sequence_id'] = parseInt(e.target.dataset.idx) + 1 ;
    }
    setCabRoute(updatedRoutes);
  };
  
  // Submit Event for Save Ride Button
  const submit = () => {
    const rides = {
      cab_id: cabNumber.value[0],
      time: timeSlot,
      routes: cabRoute,
      available_seats: cabNumber.value[1],
    };
    fetch('http://172.60.1.137:3000/cabs', {
      method: 'POST',
      headers: {
        Accept: 'application/cab-tab.com; version=1',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rides),
    }).then((response) => { console.log(); });
  };
  
  // CustomStyle for Select Box Width
  const customStyles = {
  container: provided => ({
    ...provided,
    width: 300
  })
  };

  return (
    <div>
      <div className="card col-sm-8">
        <div className="card__container" >
          <div>
            <h1 className="card__title">Add Ride for Passengers</h1>
          </div>
          <br />
          <div className="row row-md-8 offset-md-2" >
            <Label className="text_box_width" for="exampleCabNumber">Vehicle Number : </Label>
            <InputGroup className="text_box_width" className="col-sm-6">
              <Select 
               styles={customStyles}
               value={cabNumber}
                onChange={handleCabChange}
                options={options}
              />
            </InputGroup>
          </div>
          <br />

          <div className="row row-md-8 offset-md-2">
            <Label  className="text_box_width" for="exampleTimeSlot">Time Slot :  </Label>
            <InputGroup className="text_box_width" className="col-sm-6">
              <Input
                placeholder="Enter Time Slot"
                type="time"
                name="time"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              />
            </InputGroup>
          </div>
          <br />

          <div className="row" align="center">
            <legend className="text-info">Set Route</legend>
          </div>
          <br />
          {
            cabRoute.map((val, idx) => (
              <AddLocation
                key={`cabRoute-${idx}`}
                idx={idx}
                cabRoute={cabRoute}
                handleRouteChange={handleRouteChange}
              /> )
            )
          }
          <br />
            <Button className="add__btn" className="col-md-2 offset-md-5" color="primary" size="sm" onClick={addLocation}>Add Location</Button>
          <br />
          <Button  color="success"  className="col-md-6  offset-md-3" size="sm" onClick={submit}>Save Ride</Button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default AddRide;
