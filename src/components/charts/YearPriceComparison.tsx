import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Yyl", "Ortalama bahasy"],
  ...Array(50)
    .fill(0)
    .map((it, i) => ["X6" + i, i * Math.random() * 100]),
];

export const options = {
  chart: {
    title: "Yyl boyunca ortlama bahasy",
    subtitle: "Yyl boyunca ortlama bahasy",
  },
  colors: ["orange"],
};

const YearPriceComparison = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default YearPriceComparison;
