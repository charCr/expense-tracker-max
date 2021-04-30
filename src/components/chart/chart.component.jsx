import React from "react";
import { ChartBar } from "./chart-bar.component";
import "./chart.styles.css";

export const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={dataPoint.maxValue}
        />
      ))}
    </div>
  );
};
