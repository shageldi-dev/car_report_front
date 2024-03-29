import React from "react";
import { Chart } from "react-google-charts";
import { GetDashboard } from "../../types/getdashboard";

export const data = [
  ["Ulag yyly", "Ortalama bahasy"],
  [2018, 402810.00547445257],
  [2002, 92645.19626168224],
  [2017, 350638.70693069306],
  [2019, 447447.71574642125],
  [2003, 105845.68930041153],
  [2000, 78424.90658174097],
];

export const options = {
  // Material design options
  chart: {
    title: "Bahalaryň arabaglanyşygy",
    subtitle: "Bahalaryň arabaglanyşygy",
  },
  hAxis: { title: "Ulag yyly" },
  vAxis: { title: "Ortalama bahasy" },
};
interface IProps {
  data: GetDashboard | undefined;
}
const PriceCorrelation = (props: IProps) => {
  return (
    <Chart
      chartType="Scatter"
      width="100%"
      style={{ width: "100%" }}
      height="400px"
      data={[
        ["Ulag yyly", "Ortalama bahasy"],
        ...(props.data?.price_correlation_year?.buckets
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            props.data?.price_correlation_year?.buckets.map((it) => [
              `${it.key} yyl`,
              it.price_and_year.value,
            ])
          : []),
      ]}
      options={options}
    />
  );
};

export default PriceCorrelation;
