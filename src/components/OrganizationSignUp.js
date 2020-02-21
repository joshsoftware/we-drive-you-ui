import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

function OrganizationSignUp() {
	const emptyOrganizationElement = {
		name: "",
		slug: "",
		first_name: "",
		last_name: "",
		email_id: "",
		contact_no: "",
		address_line_1: "",
		address_line_2: "",
		city: "",
		state: "",
		country: "",
		pincode: "",
		password: "",
		confirm_password: "",
		role_id: 1
	};

	const [organizationElements, setOrganizationElements] = useState({
		...emptyOrganizationElement
	});

	const handleOrganizationElementChange = evt => {
		const value = evt.target.value;
		setOrganizationElements({
			...organizationElements,
			[evt.target.name]: value
		});
	};

	// Submit Event for Add Driver Button
	const register = () => {
		const organization = {
			name: organizationElements.name,
			slug: organizationElements.slug,
			first_name: organizationElements.first_name,
			last_name: organizationElements.last_name,
			email_id: organizationElements.email_id,
			contact_no: organizationElements.contact_no,
			address_line_1: organizationElements.address_line_1,
			address_line_2: organizationElements.address_line_2,
			city: organizationElements.city,
			state: organizationElements.state,
			country: organizationElements.country,
			pincode: organizationElements.pincode,
			password: organizationElements.password,
			confirm_password: organizationElements.confirm_password,
			role_id: 1
		};
		fetch("http://localhost:3000/organization_sign_up/", {
			method: "POST",
			headers: {
				Accept: "application/cab-tab.com; version=1",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ organization })
		}).then(jsonResponse => {
			return jsonResponse.json();
		})
		.then(parsedResponse => {
			alert(parsedResponse.message);
		})

	};

	return (
		<Card className="App" style={{ width: "50%" }}>
			<h2 class="head">Register Your Organization</h2>
			<br />
			<Form>
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-building icon"></i>
					</span>
					<input
						type="text"
						class="form-control"
						name="name"
						value={organizationElements.name}
						onChange={handleOrganizationElementChange}
						placeholder="Name of Organization"
					/>
				</div>
				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-building icon"></i>
					</span>
					<input
						type="text"
						class="form-control"
						name="slug"
						value={organizationElements.slug}
						onChange={handleOrganizationElementChange}
						placeholder="Company Sub-Domian"
					/>
				</div>
				<br />
				<Row sm={12}>
					<Col sm={6}>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-user icon"></i>
							</span>
							<input
								type="text"
								class="form-control"
								name="first_name"
								value={organizationElements.first_name}
								onChange={handleOrganizationElementChange}
								placeholder="First Name"
							/>
						</div>
					</Col>
					<Col sm={6}>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-user icon"></i>
							</span>
							<input
								type="text"
								class="form-control"
								name="last_name"
								value={organizationElements.last_name}
								onChange={handleOrganizationElementChange}
								placeholder="Last Name"
							/>
						</div>
					</Col>
				</Row>

				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-envelope icon"></i>
					</span>
					<input
						type="email"
						class="form-control"
						name="email_id"
						value={organizationElements.email_id}
						onChange={handleOrganizationElementChange}
						placeholder="Organization's Official Email"
					/>
				</div>
				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-address-book icon"></i>
					</span>
					<input
						type="number"
						class="form-control"
						name="contact_no"
						value={organizationElements.contact_no}
						onChange={handleOrganizationElementChange}
						placeholder="Organization Contact Number"
					/>
				</div>
				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-address-card icon"></i>
					</span>
					<input
						type="text"
						class="form-control"
						name="address_line_1"
						value={organizationElements.address_line_1}
						onChange={handleOrganizationElementChange}
						placeholder="Address Line 1"
					/>
				</div>
				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-address-card icon"></i>
					</span>
					<input
						type="text"
						class="form-control"
						name="address_line_2"
						value={organizationElements.address_line_2}
						onChange={handleOrganizationElementChange}
						placeholder="Address Line 2"
					/>
				</div>
				<br />
				<Row sm={12}>
					<Col sm={6}>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-map-pin icon"></i>
							</span>
							<input
								type="text"
								class="form-control"
								name="city"
								value={organizationElements.city}
								onChange={handleOrganizationElementChange}
								placeholder="City"
							/>
						</div>
					</Col>
					<Col sm={6}>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-street-view icon"></i>
							</span>
							<input
								type="number"
								class="form-control"
								name="pincode"
								value={organizationElements.pincode}
								onChange={handleOrganizationElementChange}
								placeholder="Pincode"
							/>
						</div>
					</Col>
				</Row>
				<br />
				<Row sm={12}>
					<Col sm={6}>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-map-pin icon"></i>
							</span>
							<input
								type="text"
								class="form-control"
								value={organizationElements.state}
								onChange={handleOrganizationElementChange}
								name="state"
								placeholder="State"
							/>
						</div>
					</Col>
					<Col sm={6}>
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-map-pin icon"></i>
							</span>
							<input
								type="text"
								class="form-control"
								value={organizationElements.country}
								onChange={handleOrganizationElementChange}
								name="country"
								placeholder="Country"
							/>
						</div>
					</Col>
				</Row>
				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-key icon"></i>
					</span>
					<input
						type="password"
						class="form-control"
						name="password"
						value={organizationElements.password}
						onChange={handleOrganizationElementChange}
						placeholder="Password"
					/>
				</div>
				<br />
				<div class="input-group">
					<span class="input-group-addon">
						<i class="fa fa-key icon"></i>
					</span>
					<input
						type="password"
						class="form-control"
						name="confirm_password"
						value={organizationElements.confirm_password}
						onChange={handleOrganizationElementChange}
						placeholder="Confirm Password"
					/>
				</div>
				<br />
				<Button color="success" onClick={register}>
					Register
				</Button>
			</Form>
		</Card>
	);
}
export default OrganizationSignUp;