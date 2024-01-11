import React from "react";
import { Chart } from "react-google-charts";
import { GetDashboard } from "../../types/getdashboard";

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
interface IProps {
  data: GetDashboard | undefined;
}

const AveragePriceOverTimeChart = (props: IProps) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={[
        ["Wagty", "Ortalama bahasy"],
        ...(props.data?.average_price_over_time?.buckets
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            props.data?.average_price_over_time?.buckets.map((it) => [
              it.key_as_string,
              it.average_price.value,
            ])
          : []),
      ]}
      options={options}
    />
  );
};

export default AveragePriceOverTimeChart;
