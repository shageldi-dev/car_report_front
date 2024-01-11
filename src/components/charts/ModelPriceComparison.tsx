import React from "react";
import { Chart } from "react-google-charts";
import { GetDashboard } from "../../types/getdashboard";

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
interface IProps {
  data: GetDashboard | undefined;
}
const ModelPriceComparison = (props: IProps) => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={[
        ["Model", "Ortalama bahasy"],
        ...(props.data?.model_price_comparison?.buckets
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            props.data?.model_price_comparison?.buckets.map((it) => [
              it.key,
              it.avg_price.value,
            ])
          : []),
      ]}
      options={options}
    />
  );
};

export default ModelPriceComparison;
