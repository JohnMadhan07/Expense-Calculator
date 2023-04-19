import React from "react";
import "./ChartBar.css";
function ChartBar(props) {
  let barfillheight = "0%";
  console.log(props.maxvalue);
  if (props.maxvalue > 0) {
    barfillheight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillheight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
export default ChartBar;
