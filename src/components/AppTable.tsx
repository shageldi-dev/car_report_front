import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface DataType {
  key: string;
  ady: string;
  markasy: string;
  bahasy: number;
  yyly: string;
  created_at: string;
}

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

const AppTable: React.FC = () => (
  <Table
    columns={columns}
    dataSource={[
      {
        ady: "X6",
        markasy: "BMW",
        bahasy: 42343,
        yyly: "2018",
        key: "",
        created_at: "2024-01-03T12:23:07.763Z",
      },
    ]}
  />
);

export default AppTable;
