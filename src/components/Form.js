import React, { Fragment, useState } from "react";

const Form = ({ createAppointment }) => {
	const initialState = {
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: ''
	}

	const [ appointment, setAppointment ] = useState(initialState);

	const handleChange = e => {
		setAppointment({
			...appointment,
			[e.target.name] : e.target.value
		})	
	}

	const handleSubmit = e => {
		e.preventDefault();

		createAppointment(appointment);
		setAppointment(initialState);
	}

	return (
		<Fragment>
			<h2>Create appointment</h2>

			<form onSubmit={handleSubmit}>
				<label>Pet Name</label>
				<input
					type="text"
					name="pet"
					className="u-full-width"
					placeholder="Pet name"
					onChange={handleChange}
					value={appointment.pet}
				/>

				<label>Owner name</label>
				<input
					type="text"
					name="owner"
					className="u-full-width"
					placeholder="Pet owner name"
					onChange={handleChange}
					value={appointment.owner}
				/>

				<label>Date</label>
				<input 
					type="date" 
					className="u-full-width" 
					name="date"
					onChange={handleChange}
					value={appointment.date}
				/>

				<label>Time</label>
				<input 
					type="time" 
					className="u-full-width" 
					name="time" 
					onChange={handleChange}	
					value={appointment.time}
				/>

				<label>Symptoms</label>
				<textarea 
					className="u-full-width" 
					name="symptoms"
					onChange={handleChange}	
					value={appointment.symptoms}				
				></textarea>

				<button type="submit" className="button-primary u-full-width">
					Add
				</button>
			</form>
		</Fragment>
	);
};

export default Form;
