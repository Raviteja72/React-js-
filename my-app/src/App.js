import React from "react";
import "./App.css";
import Card from "./components/UI/Card";

import Expense from "./components/Expenses/Expense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      date: new Date(2021, 3, 12),
      amount: "$279.45",
    },
    {
      id: "e2",
      title: "Car Interest",
      date: new Date(2021, 4, 18),
      amount: "$354.78",
    },
    {
      id: "e3",
      title: "Car dept",
      date: new Date(2021, 8, 23),
      amount: "$478.82",
    },
    {
      id: "e4",
      title: "Car savings",
      date: new Date(2021, 4, 21),
      amount: "$245.67",
    },
  ];

  /*  
  return React.createElement(
    "div",
    {},
    React.createElement("h2", { id: "head" }, "Hi bro whats up"),
    React.createElement("marquee", { id: "marq" }, "DO IT NOW"),
    React.createElement(Expense, { items: expenses })
  );
}
*/

  return (
    <div>
      <h1 id="head">Hi bro what's up</h1>
      <marquee id="marq">DO IT NOW</marquee>
      <Card>
        <Expense items={expenses} />
      </Card>
    </div>
  );
};

export default App;
