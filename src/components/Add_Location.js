import React from 'react';
import PropTypes from 'prop-types';
import {InputGroup, Label, Input} from 'reactstrap';

const AddLocation = ({ idx, cabRoute, handleRouteChange }) => {
  const locationId = `location-${idx}`;
  const creditId = `credit-${idx}`;

   return(
     <div className="row row-md-6 offset-md-3">
      <div className="col-md-4" align="left" key={`location-${idx}`}>
       <Label className="text_box_width" for="enterLocation">{`Location No : ${idx + 1}`}</Label>
       <InputGroup className="text_box_width">
         <Input
          className="text_box_width"
          placeholder="Location"
          type="text"
          name={locationId}
          data-idx={idx}
          data-field='location'
          id={locationId}
          defaultValue={cabRoute[idx].location}
          onChange={handleRouteChange}
         />
       </InputGroup>
     </div>
     <br />
     <div className="col-sm-4" key={`credit-${idx}`}>
       <Label className="text_box_width" for="enterCredit">Associated Credit</Label>
       <InputGroup className="text_box_width">
       <Input
         className="text_box_width"
         placeholder="Credit"
         type="text"
         name={creditId}
         data-idx={idx}
         id={creditId}
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
