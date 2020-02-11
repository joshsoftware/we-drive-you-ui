import React from 'react';
import PropTypes from 'prop-types';
import {InputGroup, Label, Input} from 'reactstrap';

const AddLocation = ({ idx, cabRoute, handleRouteChange }) => {
  const locationId = `location-${idx}`;
  const creditId = `credit-${idx}`;

   return(
     <div className="row">
      <div className="col-sm-6" align="left" key={`location-${idx}`}>
       <Label style={{ width:"120px" }} for="enterLocation">{`Location No : ${idx + 1}`}</Label>
       <InputGroup style={{ width:"150px" }}>
         <Input
          style={{ width:"150px" }}
          placeholder="Location"
          type="text"
          name={locationId}
          data-idx={idx}
          data-field='location'
          id={locationId}
          className="location"
          defaultValue={cabRoute[idx].location}
          onChange={handleRouteChange}
         />
       </InputGroup>
     </div>
     <br />
     <div className="col-sm-6" align="right" key={`credit-${idx}`}>
       <Label style={{ width:"150px" }} for="enterCredit">Associated Credit</Label>
       <InputGroup style={{ width:"150px" }}>
       <Input
         style={{ width:"150px" }}
         placeholder="Credit"
         type="text"
         name={creditId}
         data-idx={idx}
         id={creditId}
         className="credit"
         data-field='credit'
         defaultValue={cabRoute[idx].credit}
         onChange={handleRouteChange}
       />
       </InputGroup>
     </div>
     <br />
     </div>

   );
};

AddLocation.propTypes = {
  idx: PropTypes.number,
  CabRoute: PropTypes.array,
  handleRouteChange: PropTypes.func,
};

export default AddLocation;
