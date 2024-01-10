import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Model", "Ortalama bahasy"],
  ...Array(50)
    .fill(0)
    .map((it, i) => ["X6" + i, i * Math.random() * 100]),
];

export const options = {
  chart: {
    title: "Modellaryn ortlama bahasy",
    subtitle: "Modellaryn ortlama bahasy",
  },
  colors: ["green"],
};

const ModelPriceComparison = () => {
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

export default ModelPriceComparison;
