import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //MANAGEMENT OF THE CONDITIONNAL RETURNED CONTENT THROUGH A LET VARIABLE (INSTEAD OF KEEPING THE HERE ABOVE COMMENTED CONDITIONNAL RENDERING IN THE RETURN SECTION )

  if (props.filteredExpensesArray.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expenses found for the selected period
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpensesArray.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.titre}
          date={el.datum}
          amount={el.montant}
        />
      ))}
    </ul>
  );
  /* {filteredExpensesArray.length === 0 && (
      <p>No Expenses found for the selected period</p>
    )}
    {filteredExpensesArray.length > 0 &&
      filteredExpensesArray.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.titre}
          date={el.datum}
          amount={el.montant}
        />
      ))} */

  /* {filteredExpensesArray.length === 0 ? (
      <p>No Expenses for the selected period</p>
    ) : (
      filteredExpensesArray.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.titre}
          date={el.datum}
          amount={el.montant}
        />
      ))
    )} */
};

export default ExpensesList;
