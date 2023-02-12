import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((x) => x.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
