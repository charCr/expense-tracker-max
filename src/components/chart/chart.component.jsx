import React from "react";
import { ChartBar } from "./chart-bar.component";
import "./chart.styles.css";

export const Chart = (props) => {

const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
const identifyMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={identifyMaxValue}
        />
      ))}
    </div>
  );
};
