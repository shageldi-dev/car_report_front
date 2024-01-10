import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Markasy", "Ortalama bahasy"],
  ...Array(50)
    .fill(0)
    .map((it, i) => ["BMW" + i, i * Math.random() * 100]),
];

export const options = {
  chart: {
    title: "Markalaryn ortlama bahasy",
    subtitle: "Markalaryn ortlama bahasy",
  },
};

const BrandPriceComparison = () => {
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

export default BrandPriceComparison;
