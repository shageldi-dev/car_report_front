import React from "react";
import { Pagination, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AllLogs } from "../types/allLogs";

export interface DataType {
  key: string;
  ady: string;
  markasy: string;
  bahasy: number | undefined;
  yyly: string | undefined;
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

interface IProps {
  data: AllLogs | undefined;
  onPage: (page: number) => void;
}

const AppTable = (props: IProps) => {
  return props.data ? (
    <div>
      <Table
        columns={columns}
        pagination={false}
        dataSource={props.data?.hits?.hits.map((it) => ({
          ady: it._source.ady,
          markasy: it._source.markasy,
          bahasy: it._source.bahasy,
          yyly: it._source.yyly,
          key: it._id,
          created_at: it._source.created_at,
        }))}
      />
      <Pagination
        onChange={(e) => props.onPage(e)}
        defaultCurrent={1}
        showSizeChanger={false}
        total={Math.ceil(props.data.hits.total.value / 20)}
      />
    </div>
  ) : (
    <div>Please wait...</div>
  );
};

export default AppTable;
