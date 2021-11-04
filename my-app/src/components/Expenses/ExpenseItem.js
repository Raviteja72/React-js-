import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";

const ExpenseItem = (props) => {
  const [title, newTitle] = useState(props.title); //Two outputs

  const clickHandler = () => {
    newTitle("Upgraded");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2 id="h2">{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change-Title</button>
    </Card>
  );
};

export default ExpenseItem;
