import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      date: new Date(2021, 3, 12),
      amount: 279.45,
    },
    {
      id: "e2",
      title: "Car Interest",
      date: new Date(2021, 4, 18),
      amount: 354.78,
    },
    {
      id: "e3",
      title: "Car dept",
      date: new Date(2021, 8, 23),
      amount: 478.82,
    },
    {
      id: "e4",
      title: "Car savings",
      date: new Date(2021, 4, 21),
      amount: 245.67,
    },
  ];

  return (
    <div>
      <h1 id="head">Hi bro what's up</h1>
      <marquee id="marq">DO IT NOW</marquee>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
