import React from "react";
import { Row, Col, Container, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

const AddLocation = ({ idx, cabRoute, handleRouteChange }) => {
	const locationId = `location-${idx}`;
	const creditId = `credit-${idx}`;

	return (
		<Container>
			<Row>
				<Col sm={6}>
					<Label for="enterLocation">{`Location No : ${idx + 1}`}</Label>
				</Col>
				<Col sm={6}>
					<Label for="enterCredit">Associated Credit</Label>
				</Col>
			</Row>
			<Row>
				<Col sm={{ size: 4, offset: 1 }}>
					<Input
						placeholder="Location"
						type="text"
						name={locationId}
						data-idx={idx}
						data-field="location"
						id={locationId}
						defaultValue={cabRoute[idx].location}
						onChange={handleRouteChange}
					/>
				</Col>
				<Col sm={{ size: 4, offset: 2 }}>
					<Input
						placeholder="Credit"
						type="text"
						name={creditId}
						data-idx={idx}
						id={creditId}
						data-field="credit"
						defaultValue={cabRoute[idx].credit}
						onChange={handleRouteChange}
					/>
				</Col>
			</Row>
			<br />
		</Container>
	);
};

AddLocation.propTypes = {
	idx: PropTypes.number,
	CabRoute: PropTypes.array,
	handleRouteChange: PropTypes.func
};

export default AddLocation;
