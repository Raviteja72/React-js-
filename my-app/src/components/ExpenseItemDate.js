import "./ExpenseItem.css";

function ExpenseItemDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div class="div1">
      <div class="divs">{day}-</div>
      <div class="divs">{month}-</div>
      <div class="divs">{year}</div>
    </div>
  );
}

export default ExpenseItemDate;
