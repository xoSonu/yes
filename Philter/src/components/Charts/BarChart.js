import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 Population"],
  ["Samanabad", 100],
  ["Iqbal Town", 150],
];

export const options = {
  title: "Philter: A product Validator",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Fakeness",
    minValue: 0,
  },
  vAxis: {
    title: "Area",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
