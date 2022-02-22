import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpensesFilter from "./components/Expenses/ExpensesFilter";
const INITIAL_EXPENSES_ARRAY = [
  {
    id: "e1",
    titre: "Toilet Paper",
    montant: 94.12,
    datum: new Date(2020, 7, 14), // 7 IS aUGUST BEACAUSE IT STARTS FROM 0
  },
  {
    id: "e2",
    titre: "New TV",
    montant: 799.49,
    datum: new Date(2019, 2, 12),
  },
  {
    id: "e3",
    titre: "Car Insurance",
    montant: 294.67,
    datum: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    titre: "New Desk (Wooden)",
    montant: 450,
    datum: new Date(2020, 5, 12),
  },
];

const App = () => {
  const [globalExpenses, setGlobalExpenses] = useState(INITIAL_EXPENSES_ARRAY);

  const addExpenseHandler = (expense) => {
    setGlobalExpenses((prevState) => {
      return [...prevState, expense]; // TO ADD NEW EXPENSE TO PREVIOUS STATE, THROUGH SPREAD OPERATOR
    });
  };

  return (
    //UTILISATION DU JSX
    <div>
      {/* <p>This is also visible !</p> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={globalExpenses} />
    </div>

    // a component para (which renders a p section ), added to a div called root for example,
    // is the equivalent of writting in pure javascript:
    // const para = document.createElement('p');
    // para.textContent ="This is also visible"
    // document.getElementbyID('root').append(para)
  );
};

export default App;

/*
  CI DESSOUS LEQUIVALENT DU JSX SI NOUS DEVIONS LECRIRE EN MODE PURISTE
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started"),
    React.createElement(Expenses, { items: expensesArray })
  );
*/
