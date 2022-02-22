import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showModal, setShowModal] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowModal(false);
  };
  const cancelExpenseDataHandler = () => {
    setShowModal(false);
  };
  const showModalHandlerToTrue = () => {
    setShowModal(true);
  };
  return (
    <div className="new-expense">
      {!showModal && (
        <button onClick={showModalHandlerToTrue}>Add New Expense</button>
      )}
      {showModal && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
