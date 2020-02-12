 import React, { useState, useEffect } from 'react';
 import { Col,Button,Label, InputGroup, Input ,FormGroup} from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './component.css';
 
  function OrganizationSettings(){
    const [ValueOfCredit, setValueOfCredit] = useState('');
    const [Maxyeild, setMaxyeild] = useState('');
    const [serviceType, setServiceType] = useState('fixed');
    const [costType, setCostType] = useState('unpaid');

    const signup = () => {
      const organization_set = {
        val_of_credit: ValueOfCredit,
        max_yield: Maxyeild,
        service_type: serviceType,
        cost_type: costType,
      };

      fetch(`http://josh.localhost:3000/`,
      {
        method: 'POST',
        headers:{
          'Accept': 'application/vnd.cab-tab.com; version=1',
          'Access-Control-Allow-Origin': 'http://localhost:3002',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(organization_set)
      }).then((jsonResponse) => {
        console.log(jsonResponse);
        return jsonResponse.json();
        }).then((parsedResponse) => {
          console.log({parsedResponse});
          setValueOfCredit([...parsedResponse]);
          }).catch((error)=>{
        console.error("Error");
        });
    }
  return(
    <div>
      <div className="card col-sm-7">
        <div className="card__container">
          <div>
            <h1 className="card__title">Organization Settings</h1>
          </div>
          <br />
          <div className="row pading">
            <InputGroup className="col-sm-6">
              <Input
                placeholder="Value of one Credit"
                type="text"
                name="valueofcredit"
                value={ValueOfCredit}
                onChange={(e) => setValueOfCredit(e.target.value)}
              />
            </InputGroup>
            <br />

            <InputGroup className="col-sm-6">
              <Input
                placeholder="No. of Maximum Yeild"
                type="text"
                name="Maxyeild"
                value={Maxyeild}
                onChange={(e) => setMaxyeild(e.target.value)}
              />
            </InputGroup>
          </div >
            <br />
          <div className="row" > 
            <InputGroup className="col-sm-6">

              <div className="row">
              <FormGroup check sm={6}>
              <Label check>
              <Label className= "pading1">Service Type</Label>
              <Input value="ondemand" checked={serviceType === 'ondemand'}  type="radio" name="radio1" onChange={(e) => setServiceType(e.target.value)}/>{' '}
              Ondemand<div className= "pading"></div> 
              </Label>
              </FormGroup> 

              <FormGroup check sm={6}>
              <Label check>
              <Input value='fixed' checked={serviceType === 'fixed'} type="radio" name="radio1" onChange={(e) => setServiceType(e.target.value)}/>{' '}
              Fixed
              </Label>
              </FormGroup>        
             </div> 
            </InputGroup>
          </div>
          
          <br/>
            <div className="row"> 
            <InputGroup className="col-sm-6">
              <div className="row">
              <FormGroup check sm={6}>
              <Label className= "pading">Cost Type</Label>
              <Label check>
              <Input value="paid" checked={costType === 'paid'}  type="radio" name="radio2" onChange={(e) => setCostType(e.target.value)}/>{' '}
              Paid<div className= "pading"></div> 
              </Label>
              </FormGroup> 
              <FormGroup check sm={6}>
              <Label check>
              <Input value="unpaid" checked={costType === 'unpaid'}  type="radio" name="radio2" onChange={(e) => setCostType(e.target.value)}/>{' '}
              Unpaid
              </Label>
              </FormGroup>       
              </div> 
            </InputGroup>
          </div>
          <br/>

          
          <div className="row">
          <Button className="add__btn" color="success" size="sm" >Add Cab</Button>
          <Button className="add__btn" color="success" size="sm" >Add Ride</Button>
          <br/>
            </div>
            <br />  
          <Button className="add__btn" color="success" onClick={signup}size="sm" >Save</Button>
          <br />
           </div>
        </div>    
      </div>  
        
    );
}
export default OrganizationSettings;