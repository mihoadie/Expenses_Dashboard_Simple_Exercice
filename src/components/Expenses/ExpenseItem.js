import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandlerTitle = () => {
  //   if (title === props.title) {
  //     setTitle("Updated");
  //   } else {
  //     setTitle(props.title);
  //   }
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate dateReference={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"> ${props.amount}</div>
        </div>
        {/* <button onClick={clickHandlerTitle}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
