import React from "react";
import { Chart } from "react-google-charts";
import { GetDashboard } from "../../types/getdashboard";

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
interface IProps {
  data: GetDashboard | undefined;
}
const DailyUpload = (props: IProps) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={[
        ["Senesi", "Ýüklenme sany"],
        ...(props.data?.daily_upload_trends?.buckets
          ? // eslint-disable-next-line no-unsafe-optional-chaining
            props.data?.daily_upload_trends?.buckets.map((it) => [
              it.key_as_string,
              it.daily_upload_count.value,
            ])
          : []),
      ]}
      options={options}
    />
  );
};

export default DailyUpload;
