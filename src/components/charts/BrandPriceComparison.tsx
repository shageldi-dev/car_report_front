import React from "react";
import { Chart } from "react-google-charts";
import { GetDashboard } from "../../types/getdashboard";

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
interface IProps {
  data: GetDashboard | undefined;
}
const BrandPriceComparison = (props: IProps) => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={[
        ["Markasy", "Ortalama bahasy"],
        ...(props.data?.brand_price_comparison?.buckets
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            props.data?.brand_price_comparison?.buckets.map((it) => [
              it.key,
              it.avg_price.value,
            ])
          : []),
      ]}
      options={options}
    />
  );
};

export default BrandPriceComparison;
