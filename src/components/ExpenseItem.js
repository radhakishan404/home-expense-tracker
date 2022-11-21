import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			<div>
				<span class='mr-3'>{props.name}</span>
			</div>
			<div>
				<span class='mr-3'>{props.by}</span>
			</div>
			<div>
				<span class='mr-3'>{props.date}</span>
			</div>
			<div>
				<span class='badge badge-primary badge-pill mr-3'>₹{props.cost}</span>
				{/* <TiDelete size='1.5em' onClick={handleDeleteExpense} /> */}
			</div>
		</li>
	);
};

export default ExpenseItem;
