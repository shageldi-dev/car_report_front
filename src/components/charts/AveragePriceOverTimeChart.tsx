import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Wagty", "Ortalama bahasy"],
  ...Array(60)
    .fill(0)
    .map((_, i: number) => [
      "2024-01-" + (i + 1) + "",
      249996 * Math.random() * 100,
    ]),
];

export const options = {
  title: "Wagt boýunça ortaça baha",
  curveType: "function",
  legend: { position: "bottom" },
  colors: ["red"],
};

const AveragePriceOverTimeChart = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default AveragePriceOverTimeChart;
