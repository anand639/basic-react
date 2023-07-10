import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

	let title = props.title;

	const clickHandler = () => {
		title = 'updated'
		console.log(title);
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			{/* <div>{props.expense.date.toISOString()}</div> */}
			{/* above prop is all about that we are adding the data at once to app  */}
			{/* and below prop is all about that we are giving the data  one by one  */}
			{/* <div>{props.date.toISOString()}</div> */}
			{/* <div>{expenseDate.toISOString()}</div> */}
			<div className="expense-item__description">
				{/* <h2>{props.expense.title}</h2> */}
				<h2>{title}</h2>
				{/* <div className="expense-item__price">${props.expense.amount}</div> */}
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
