import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");

  const manageEnteredFilterHandler = (filterInput) => {
    setFilter(filterInput);
  };
  const filteredExpensesArray = props.items.filter((el) => {
    return el.datum.getFullYear().toString() === filter;
  });

  return (
    <div>
      <div></div>
      <Card className="expenses">
        <ExpensesFilter
          onEnteredFilter={manageEnteredFilterHandler}
          selected={filter}
        />
        <ExpensesChart filteredExpenses={filteredExpensesArray} />
        <ExpensesList filteredExpensesArray={filteredExpensesArray} />
      </Card>
    </div>
  );
};

export default Expenses;
