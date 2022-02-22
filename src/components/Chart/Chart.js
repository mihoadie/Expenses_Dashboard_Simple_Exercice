import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointValues);
  /* le spread operator allows to get out all elements of dataPointValues Array, 
        converting them into a list of element for each value of the array
    and that is mandatory here because math.max() only accepts list of numbers as argument to detect the highest one
  */
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
