import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const exp of props.filteredExpenses) {
    const expenseMonth = exp.datum.getMonth(); // january is 0, because starting as 0, which is very convenient for the below line, as it corresponds to the indexes of the chartDataPoints
    chartDataPoints[expenseMonth].value += exp.montant;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
