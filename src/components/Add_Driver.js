import React, { useState } from "react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Card,
	Form,
	Row,
	Col,
	Button,
	Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component.css";

function Add_Driver() {
	const emptyDriverElement = {
		first_name: "",
		last_name: "",
		email_id: "",
		contact_no_1: "",
		contact_no_2: "",
		license_no: ""
	};

	const [driverElements, setDriverElements] = useState({
		...emptyDriverElement
	});

	const handleDriverElementChange = evt => {
		const value = evt.target.value;
		setDriverElements({ ...driverElements, [evt.target.name]: value });
	};

	// Submit Event for Add Driver Button
	const submit = () => {
		const driver = {
			first_name: driverElements.first_name,
			last_name: driverElements.last_name,
			email_id: driverElements.email_id,
			contact_no_1: driverElements.contact_no_1,
			contact_no_2: driverElements.contact_no_2,
			license_no: driverElements.license_no
		};
		fetch("http://localhost:4000/users", {
			method: "POST",
			headers: {
				Accept: "application/cab-tab.com; version=1",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(driver)
		}).then(response => {
			console.log(response);
		});
	};

	return (
		<Card className="App" style={{ width: "50%" }}>
			<Row>
				<Col sm="12" md={{ size: 12 }}>
					<h2 style={{ color: "blue" }}>Add Driver To Organization</h2>
				</Col>
			</Row>
			<br />
			<Form className="form">
				<Row>
					<Col md={6}>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>First Name :</InputGroupText>
							</InputGroupAddon>
							<Input
								type="text"
								name="first_name"
								value={driverElements.first_name}
								onChange={handleDriverElementChange}
								placeholder="Ex. Sagar"
							/>
						</InputGroup>
					</Col>

					<Col md={6}>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Last Name :</InputGroupText>
							</InputGroupAddon>
							<Input
								type="text"
								name="last_name"
								value={driverElements.last_name}
								onChange={handleDriverElementChange}
								placeholder="Ex. Sonwane"
							/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={12}>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Email ID :</InputGroupText>
							</InputGroupAddon>
							<Input
								type="email"
								name="email_id"
								value={driverElements.email_id}
								onChange={handleDriverElementChange}
								placeholder="Ex. sagarsonwane@gmail.com"
							/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={6}>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Contact No. 1 :</InputGroupText>
							</InputGroupAddon>
							<Input
								type="number"
								name="contact_no_1"
								value={driverElements.contact_no_1}
								onChange={handleDriverElementChange}
								placeholder=""
							/>
						</InputGroup>
					</Col>

					<Col md={6}>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Contact No. 2 :</InputGroupText>
							</InputGroupAddon>
							<Input
								type="number"
								name="contact_no_2"
								value={driverElements.contact_no_2}
								onChange={handleDriverElementChange}
								placeholder=""
							/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={12}>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText>License No :</InputGroupText>
							</InputGroupAddon>
							<Input
								type="text"
								name="license_no"
								value={driverElements.license_no}
								onChange={handleDriverElementChange}
								placeholder=""
							/>
						</InputGroup>
					</Col>
				</Row>
				<br />
				<Button color="success" onClick={submit}>
					Add Driver
				</Button>
			</Form>
		</Card>
	);
}
export default Add_Driver;
