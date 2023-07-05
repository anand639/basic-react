import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expenses = [
		{
			title: "Car",
			amount: 1500,
			date: new Date(2023, 7, 9),
		},
		{
			title: "House",
			amount: 5000,
			date: new Date(2023, 11, 25),
		},
		{
			title: "Mobile",
			amount: 1500,
			date: new Date(2023, 12, 29),
		},
		{
			title: "New House",
			amount: 15000,
			date: new Date(2024, 1, 12),
		},
		{
			title: "Tablet",
			amount: 1200,
			date: new Date(2025, 5, 11),
		},
		{
			title: "Tablet",
			amount: 1200,
			date: new Date(2025, 5, 11),
		},
		{
			title: "Tablet",
			amount: 1200,
			date: new Date(2025, 5, 11),
		},
		{
			title: "Tablet",
			amount: 1200,
			date: new Date(2025, 5, 11),
		},
	];
	return (
		<div>
			<h1>Expense Tracker App</h1>
			<ExpenseItem
				// expense={expenses[0]}
				// above  method is all about passing the data at once
				// below method is all about to pass the data one by one
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				// expense={expenses[1]}
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				// expense={expenses[2]}
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			></ExpenseItem>
			<ExpenseItem
				// expense={expenses[3]}
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
			<ExpenseItem
				// expense={expenses[4]}
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
			<ExpenseItem
				// expense={expenses[5]}
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
			<ExpenseItem
				// expense={expenses[6]}
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
			<ExpenseItem
				expense={expenses[7]}
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			></ExpenseItem>
		</div>
	);
}

export default App;
