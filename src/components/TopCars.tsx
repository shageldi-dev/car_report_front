import React from "react";
import { Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataType } from "./AppTable";
import { GetDashboard } from "../types/getdashboard";

const columns: ColumnsType<DataType> = [
  {
    title: "Ady",
    dataIndex: "ady",
    key: "ady",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Markasy",
    dataIndex: "markasy",
    key: "markasy",
  },
  {
    title: "Bahasy",
    dataIndex: "bahasy",
    key: "bahasy",
  },
  {
    title: "Yyly",
    dataIndex: "yyly",
    key: "yyly",
  },
  {
    title: "Wagty",
    dataIndex: "created_at",
    key: "created_at",
    render: (text) => <a>{`${text}`.split("T")[0]}</a>,
  },
];

interface IProps {
  data: GetDashboard | undefined;
}

const TopCars = (props: IProps) => {
  return (
    <div>
      <Typography style={{ fontSize: "22px" }}>Iň gymmat 10 ulag</Typography>
      <br />
      <Table
        columns={columns}
        dataSource={
          props.data?.top
            ? props.data.top.map((it) => ({
                ady: it._source.ady,
                markasy: it._source.markasy,
                bahasy: it._source.bahasy,
                yyly: it._source.yyly,
                key: it._source.full,
                created_at: it._source.created_at,
              }))
            : []
        }
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
    </div>
  );
};

export default TopCars;
