import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
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
				<h2>{props.title}</h2>
				{/* <div className="expense-item__price">${props.expense.amount}</div> */}
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;