import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const datapointvalues = props.datapoints.map((dataPoint) => dataPoint.value);
  console.log(...datapointvalues);
  //arr.reduce((a, b) => { return Math.max(a, b) });
  const totalmaximum = datapointvalues.reduce((a,b) =>{return Math.max(a,b)});
  console.log(totalmaximum);
  return (
    <div className="chart">
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxvalue={totalmaximum}
        />
      ))}
    </div>
  );
}
export default Chart;
