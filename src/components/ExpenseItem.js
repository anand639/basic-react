import "./ExpenseItem.css";

function ExpenseItem() {
	const expenseDate = new Date();
	const expenseTitle = "Car Purchase";
	const expenseAmount = '$247.54';
	return (
		<div className="expense-item">
			<div>{expenseDate.toDateString()}</div>
            {/* <div>{expenseDate.toISOString()}</div> */}
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">{expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
