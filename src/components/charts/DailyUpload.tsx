import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Senesi", "Ýüklenme sany"],
  ...Array(60)
    .fill(0)
    .map((_, i: number) => [
      "2024-01-" + (i + 1) + "",
      249996 * Math.random() * 100,
    ]),
];

export const options = {
  title: "Gundelik Ýüklenme sany",
  curveType: "function",
  legend: { position: "bottom" },
  colors: ["brown"],
};

const DailyUpload = () => {
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

export default DailyUpload;
