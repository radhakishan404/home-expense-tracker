import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

import { readExpenses } from './apis';

const App = () => {
	const [expenses, setExpenses] = useState(null);

	useEffect(() => {
		async function defaultFunc() {
			let data = await readExpenses();
			setExpenses(data);
		}
		defaultFunc();
	}, [])

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	return (
		<div className='container'>
			<h1 className='mt-3'>Budget Planner</h1>
			<div className='row mt-3'>
				<div className='col-sm'>
					{expenses ? <ExpenseTotal expenses={expenses} /> : null}
				</div>
			</div>
			<h3 className='mt-3'>Expenses</h3>
			<div className='row '>
				<div className='col-sm'>
					{expenses ? <ExpenseList setfilteredExpenses={(dd) => setfilteredExpenses(dd)} filteredExpenses={filteredExpenses} expenses={expenses} /> : null}
				</div>
			</div>
			<h3 className='mt-3'>Add Expense</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					{
						expenses ? <AddExpenseForm expenses={expenses} /> : null
					}

				</div>
			</div>
		</div>
	);
};

export default App;
