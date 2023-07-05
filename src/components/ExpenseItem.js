import "./ExpenseItem.css";

function ExpenseItem(props) {
	const month = props.date.toLocaleString("en-US", { month: "long" });
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString("en-US", { day: "2-digit" });
	// const expenseDate = new Date();
	// const expenseTitle = "Car Purchase";
	// const expenseAmount = '$247.54';
	return (
		<div className="expense-item">
			{/* <div>{props.expense.date.toISOString()}</div> */}
			{/* above prop is all about that we are adding the data at once to app  */}
			{/* and below prop is all about that we are giving the data  one by one  */}
			{/* <div>{props.date.toISOString()}</div> */}
			<div>
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
			{/* <div>{expenseDate.toISOString()}</div> */}
			<div className="expense-item__description">
				{/* <h2>{props.expense.title}</h2> */}
				<h2>{props.title}</h2>
				{/* <div className="expense-item__price">${props.expense.amount}</div> */}
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
