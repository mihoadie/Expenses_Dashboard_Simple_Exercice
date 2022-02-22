import React from "react";
import "./ExpensesFilter.css";
function ExpensesFilter(props) {
  const filterChangeHandler = (event) => {
    props.onEnteredFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Choose a period:</label>

        <select
          value={props.selected}
          onChange={filterChangeHandler}
          name="ExpensesFilter"
          id="ExpensesFilter"
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
