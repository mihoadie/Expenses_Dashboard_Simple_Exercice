import "./ExpenseDate.css";
import React from "react";

const ExpenseDate = (props) => {
  // traitement du format de la date passée en props, via la fonction toLocaleString
  const day = props.dateReference.toLocaleString("fr-FR", { day: "2-digit" });
  const month = props.dateReference.toLocaleString("fr-FR", { month: "long" });
  const year = props.dateReference.toLocaleString("fr-FR", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
