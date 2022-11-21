import React, { useState } from 'react';
import { createExpenses } from '../apis';
import { v4 as uuidv4 } from 'uuid';
import people from "../json/people.json";

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}

const AddExpenseForm = (props) => {
	const [name, setName] = useState('');
	const [by, setBy] = useState('Dimple');
	const [cost, setCost] = useState('');
	const [date, setDate] = useState(formatDate(new Date()));

	const onSubmit = async (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name: name,
			by: by,
			date: date,
			cost: parseInt(cost),
		};

		await createExpenses(expense);

		setName('');
		setCost('');
		setBy('');
		setDate(formatDate(new Date()));
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='by'>By</label>
					<select
						required='required'
						class='form-control'
						id='by'
						value={by}
						onChange={(event) => setBy(event.target.value)}
					>
						{
							people.map(function (dd, key) {
								return (
									<option value={dd.name} key={key}>{dd.name}</option>
								)
							})
						}
					</select>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='date'>Date</label>
					<input
						required='required'
						type='date'
						class='form-control'
						id='date'
						value={date}
						onChange={(event) => setDate(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
