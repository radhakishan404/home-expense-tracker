import React from 'react';

const ExpenseTotal = (props) => {

	const total = props.expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Spent so far: ₹{total}</span>
		</div>
	);
};

export default ExpenseTotal;
