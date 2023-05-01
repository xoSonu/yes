import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Area", "product"],
  ["Samanabad", 100],
  ["Iqbal Town", 200],
  
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
