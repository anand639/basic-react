import "./ExpenseItem.css";

function ExpenseItem(props) {
	// const expenseDate = new Date();
	// const expenseTitle = "Car Purchase";
	// const expenseAmount = '$247.54';
	return (
		<div className="expense-item">
			<div>{props.expense.date.toISOString()}</div>
            {/* <div>{expenseDate.toISOString()}</div> */}
			<div className="expense-item__description">
				<h2>{props.expense.title}</h2>
				<div className="expense-item__price">${props.expense.amount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
