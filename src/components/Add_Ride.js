import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col, Button, Label, Input } from "reactstrap";
import AddLocation from "./Add_Location";
import Select from "react-select";

function AddRide() {
	const emptyCabRoute = { location: "", credit: "", sequence_id: "" };
	const [cabRoute, setCabRoute] = useState([{ ...emptyCabRoute }]);
	const [cabNumberList, setCabNumberList] = useState([]);
	const [timeSlot, setTimeSlot] = useState("");
	const [cabNumber, setCabNumber] = useState({
		label: "Select Vehicle",
		value: -1,
		disabled: "yes"
	});

	const options = cabNumberList.map(cab_no => {
		return {
			value: [cab_no.id, cab_no.capacity],
			label: cab_no.vehicle_number + " [ Capacity : " + cab_no.capacity + " ]"
		};
	});

	const addLocation = () => {
		setCabRoute([...cabRoute, { ...emptyCabRoute }]);
	};

	//Hook For Fetching Data Into CabNumberList
	useEffect(() => {
		fetch("http://172.60.1.137:3000/cabs", {
			method: "GET",
			headers: {
				Accept: "application/cab-tab.com; version=1"
			}
		})
			.then(jsonResponse => {
				return jsonResponse.json();
			})
			.then(parsedResponse => {
				setCabNumberList([...parsedResponse.data]);
			})
			.catch(error => {
				console.error("Error");
			});
	}, []);

	//Handler for Managing Chnages Select DropDown
	const handleCabChange = selectedOption => {
		setCabNumber(selectedOption);
	};

	//Handler for Managing Changes in Location and Credit Field
	const handleRouteChange = e => {
		const updatedRoutes = [...cabRoute];
		updatedRoutes[e.target.dataset.idx][e.target.dataset.field] =
			e.target.value;
		if (e.target.dataset.field === "location") {
			updatedRoutes[e.target.dataset.idx]["sequence_id"] =
				parseInt(e.target.dataset.idx) + 1;
		}
		setCabRoute(updatedRoutes);
	};

	// Submit Event for Save Ride Button
	const submit = () => {
		const rides = {
			cab_id: cabNumber.value[0],
			time: timeSlot,
			routes: cabRoute,
			available_seats: cabNumber.value[1]
		};
		fetch("http://172.60.1.137:3000/cabs", {
			method: "POST",
			headers: {
				Accept: "application/cab-tab.com; version=1",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(rides)
		}).then(response => {
			console.log();
		});
	};

	return (
		<Card className="App" style={{ width: "60%" }}>
			<Row>
				<Col sm="12" md={{ size: 12 }}>
					<h2 style={{ color: "blue" }}>Add Ride To Organization</h2>
				</Col>
			</Row>
			<br />
			<Form className="form">
				<Row>
					<Col sm="6" md={{ size: 4 }}>
						<Label>Vehicle Number :</Label>
					</Col>
					<Col sm="12" md={{ size: 6 }}>
						<Select
							value={cabNumber}
							onChange={handleCabChange}
							options={options}
						/>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm="6" md={{ size: 4 }}>
						<Label>Time Slot :</Label>
					</Col>
					<Col sm="12" md={{ size: 6 }}>
						<Input
							type="time"
							name="time"
							value={timeSlot}
							onChange={e => setTimeSlot(e.target.value)}
							placeholder="Enter Cab Capacity"
						/>
					</Col>
				</Row>
				<br />
				<Row>
					<Col sm="12" md={{ size: 12 }}>
						<legend className="text-info">Set Route</legend>
					</Col>
				</Row>
				{cabRoute.map((val, idx) => (
					<AddLocation
						key={`cabRoute-${idx}`}
						idx={idx}
						cabRoute={cabRoute}
						handleRouteChange={handleRouteChange}
					/>
				))}
				<Row>
					<Col>
						<Button color="primary" onClick={addLocation}>
							Add Location
						</Button>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<Button style={{ width: 300 }} color="success" onClick={submit}>
							Save Ride
						</Button>
					</Col>
				</Row>

				<br />
			</Form>
		</Card>
	);
}

export default AddRide;
