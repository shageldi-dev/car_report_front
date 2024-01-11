import React from "react";
import { Chart } from "react-google-charts";
import { GetDashboard } from "../../types/getdashboard";

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
interface IProps {
  data: GetDashboard | undefined;
}
const YearPriceComparison = (props: IProps) => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={[
        ["Yyl", "Ortalama bahasy"],
        ...(props.data?.year_price_trends?.buckets
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            props.data?.year_price_trends?.buckets.map((it) => [
              `${it.key} yyl`,
              it.avg_price.value,
            ])
          : []),
      ]}
      options={options}
    />
  );
};

export default YearPriceComparison;
