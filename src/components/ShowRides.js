import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "reactstrap";
import UpdateRide from "./UpdateRide";
import AddRide from "./AddRide";
import ModalComponent from "./Modal";

function ShowRides() {
	const [rideRecord, setRideRecord] = useState([]);
	const [ride,setRide] = useState();
	const [show_add_record_modal, setAddModal] = useState(false);
	const [show_update_record_modal, setUpdateModal] = useState(false);

	const add_toggle = () => setAddModal(!show_add_record_modal);
	const update_toggle = () => setUpdateModal(!show_update_record_modal);

	useEffect(() => {
		fetch("http://tesla.localhost:3000/rides/", {
			method: "GET",
			headers: {
				Accept: "application/cab-tab.com; version=1",
				"Access-Control-Allow-Origin": "http://tesla.localhost:3001",
				Authorization:
					"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODIzNTIyNTl9.MHLKEjhEen02JYU_QwUqywOdaKgqKzw07HkazkorxLQ"
			}
		})
			.then(jsonResponse => {
				return jsonResponse.json();
			})
			.then(parsedResponse => {
				console.log(parsedResponse.data.data);
				setRideRecord(parsedResponse.data.data);
			})
			.catch(error => {
				console.error("Error");
			});
	}, []);

	const edit_record = record => {
		setRide(record);
		setUpdateModal(true);
	};

	const options = rideRecord.map(cab_no => {
		return {
			id: cab_no.id,
			available_seats: cab_no.attributes.available_seats,
			time: cab_no.attributes.time,
			cab: cab_no.attributes.cab.data.attributes,
			hops: cab_no.attributes.hops.data.map(hop => {
				return {
					id: hop.id,
					location: hop.attributes.location,
					credit: hop.attributes.credit,
					sequence_id: hop.attributes.sequence_id
				};
			})
		};
	});

	// Delete Ride Event handler
	const delete_ride = recordId => {
		fetch("http://tesla.localhost:3000/rides/" + recordId, {
			method: "delete",
			headers: {
				Accept: "application/cab-tab.com; version=1",
				"Access-Control-Allow-Origin": "http://tesla.localhost:3001",
				Authorization:
					"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1ODIzMDE4MTh9.Vu0zgkRXfyhIslcLhYSQs6h3X8sxx_cQ7mQTQt9tfng"
			}
		}).then(response => {
			alert("Post deleted successfully");
		});
	};

	return (
		<Container>
			<ModalComponent
				title="Update Ride Details"
				show={show_update_record_modal}
				toggle={update_toggle}
			>
				<UpdateRide record={ride} />
			</ModalComponent>

			<ModalComponent
				title="Add Ride To Organization"
				show={show_add_record_modal}
				toggle={add_toggle}
			>
				<AddRide />
			</ModalComponent>
			<Table bordered hover>
				<thead>
					<tr>
						<th>Serial No.</th>
						<th>Vehicle Number</th>
						<th>Vehicle Capacity</th>
						<th>Scheduled Time</th>
						<th>Route</th>
						<th colspan="2">
							<Button color="success" onClick={add_toggle}>
								Add Ride
							</Button>
						</th>
					</tr>
				</thead>
				<tbody>
					{options.map((record, idx) => {
						return (
							<tr key={idx}>
								<td>{idx + 1}</td>
								<td>{record.cab.vehicle_number}</td>
								<td>{record.available_seats}</td>
								<td>{record.time}</td>
								<td>
									{record.hops.map((route, seq) => {
										return (
											<li>{route.sequence_id + ". --- " + route.location}</li>
										);
									})}
								</td>
								<td>
									<Button color="primary" onClick={() => edit_record(record)}>
										Edit
									</Button>
								</td>
								<td>
									<Button color="danger" onClick={() => delete_ride(record.id)}>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}

export default ShowRides;

// import React, { useState, useEffect } from "react";
// import { Table, Container, Button } from "reactstrap";
// import UpdateRide from "./UpdateRide";
// import AddRide from "./AddRide";
// import ModalComponent from "./Modal";

// function ShowRides() {
// 	const [rideRecord, setRideRecord] = useState([]);
// 	const [show_add_record_modal, setAddModal] = useState(false);
// 	const [show_update_record_modal, setUpdateModal] = useState(false);

// 	const rideRecords = [
// 		{
// 			id: 1,
// 			cab_id: "1",
// 			available_seats: "5",
// 			time: "12:20",
// 			routes: [
// 				{ location: "Baner", credit: "5", sequence_id: "1" },
// 				{ location: "Kothrud", credit: "2", sequence_id: "2" },
// 				{ location: "Hinjewadi", credit: "4", sequence_id: "3" }
// 			],
// 			cab: { id: "1", vehicle_number: "MH45UJ7896", capacity: "4" }
// 		},
// 		{
// 			id: 2,
// 			cab_id: "2",
// 			available_seats: "4",
// 			time: "14:20",
// 			routes: [
// 				{ location: "Baner", credit: "5", sequence_id: "1" },
// 				{ location: "Kothrud", credit: "2", sequence_id: "2" },
// 				{ location: "Hinjewadi", credit: "4", sequence_id: "3" }
// 			],
// 			cab: { id: "2", vehicle_number: "MP68MG7852", capacity: "4" }
// 		},
// 		{
// 			id: 3,
// 			cab_id: "3",
// 			available_seats: "3",
// 			time: "16:20",
// 			routes: [
// 				{ location: "Baner", credit: "5", sequence_id: "1" },
// 				{ location: "Kothrud", credit: "2", sequence_id: "2" },
// 				{ location: "Hinjewadi", credit: "4", sequence_id: "3" }
// 			],
// 			cab: { id: "2", vehicle_number: "MH78IK9630", capacity: "4" }
// 		}
// 	];

// 	// useEffect(() => {
// 	// 	fetch("http://172.60.1.137:3000/cabs", {
// 	// 		method: "GET",
// 	// 		headers: {
// 	// 			Accept: "application/cab-tab.com; version=1"
// 	// 		}
// 	// 	})
// 	// 		.then(jsonResponse => {
// 	// 			return jsonResponse.json();
// 	// 		})
// 	// 		.then(parsedResponse => {
// 	// 			setRideRecords([...parsedResponse.data]);
// 	// 		})
// 	// 		.catch(error => {
// 	// 			console.error("Error");
// 	// 		});
// 	// }, []);

// 	const add_toggle = () => setAddModal(!show_add_record_modal);
// 	const update_toggle = () => setUpdateModal(!show_update_record_modal);

// 	const edit_record = record => {
// 		setRideRecord(record);
// 		setUpdateModal(true);
// 	};

// 	// Delete Ride Event handler
// 	const delete_ride = recordId => {
// 		fetch("http://172.60.1.137:3000/cabs/" + recordId, {
// 			method: "delete",
// 			headers: {
// 				Accept: "application/cab-tab.com; version=1",
// 				"Content-Type": "application/json"
// 			}
// 		}).then(response => {
// 			alert("Post deleted successfully");
// 		});
// 	};

// 	return (
// 		<Container>
// 			<ModalComponent
// 				title="Update Ride Details"
// 				show={show_update_record_modal}
// 				toggle={update_toggle}
// 			>
// 				<UpdateRide record={rideRecord} />
// 			</ModalComponent>

// 			<ModalComponent
// 				title="Add Ride To Organization"
// 				show={show_add_record_modal}
// 				toggle={add_toggle}
// 			>
// 				<AddRide />
// 			</ModalComponent>
// 			<Table bordered hover>
// 				<thead>
// 					<tr>
// 						<th>Serial No.</th>
// 						<th>Vehicle Number</th>
// 						<th>Vehicle Capacity</th>
// 						<th>Scheduled Time</th>
// 						<th>Route</th>
// 						<th colspan="2">
// 							<Button color="success" onClick={add_toggle}>
// 								Add Ride
// 							</Button>
// 						</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{rideRecords.map((record, idx) => {
// 						return (
// 							<tr key={idx}>
// 								<td>{idx + 1}</td>
// 								<td>{record.cab.vehicle_number}</td>
// 								<td>{record.available_seats}</td>
// 								<td>{record.time}</td>
// 								<td>
// 									{record.routes.map((route, seq) => {
// 										return (
// 											<li>{route.sequence_id + ". --- " + route.location}</li>
// 										);
// 									})}
// 								</td>
// 								<td>
// 									<Button color="primary" onClick={() => edit_record(record)}>
// 										Edit
// 									</Button>
// 								</td>
// 								<td>
// 									<Button color="danger" onClick={() => delete_ride(record.id)}>
// 										Delete
// 									</Button>
// 								</td>
// 							</tr>
// 						);
// 					})}
// 				</tbody>
// 			</Table>
// 		</Container>
// 	);
// }

// export default ShowRides;
