import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

	const handleChange = (event) => {
		const searchResults = props.expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		props.setfilteredExpenses(searchResults);
	};

	const handleDate = (event) => {
		var month = event.target.value;
		var year = new Date().getFullYear();
		let date = year + "-" + month;

		const searchResults = props.expenses.filter((filteredExpense) =>
			filteredExpense.date.includes(date)
		);
		props.setfilteredExpenses(searchResults);
	}

	return (
		<>
			<div className='d-flex justify-content-between align-items-center'>
				<input
					type='text'
					class='form-control mb-2 mr-sm-2'
					placeholder='Type to search...'
					onChange={handleChange}
				/>
				<select
					className='form-control mb-2 mr-sm-2'
					onChange={handleDate}
				>
					<option value={""}>Select Month</option>
					<option value={"01"}>January</option>
					<option value={"02"}>February</option>
					<option value={"03"}>March</option>
					<option value={"04"}>April</option>
					<option value={"05"}>May</option>
					<option value={"06"}>June</option>
					<option value={"07"}>July</option>
					<option value={"08"}>August</option>
					<option value={"09"}>September</option>
					<option value={"10"}>October</option>
					<option value={"11"}>November</option>
					<option value={"12"}>December</option>
				</select>
			</div>
			<ul class='list-group mt-3 mb-3'>
				{props.filteredExpenses && props.filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						by={expense.by}
						cost={expense.cost}
						date={expense.date}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
