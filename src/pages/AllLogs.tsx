import React, { useEffect, useState } from "react";
import AppTable from "../components/AppTable";
import { Typography } from "antd";
import { AxiosInstance } from "../utils/axios.instance";
import { AllLogs as Logs } from "../types/allLogs";

const AllLogs = () => {
  const [data, setData] = useState<Logs | undefined>();
  function getData(page: number) {
    AxiosInstance.get<Logs>("/api/all-logs?page=" + page).then((res) =>
      setData(res.data)
    );
  }
  useEffect(() => {
    getData(0);
  }, []);
  return (
    <div style={{ padding: "22px" }}>
      <Typography style={{ fontSize: "22px" }}>Ähli maglumatlar</Typography>
      <AppTable onPage={(page) => getData(page - 1)} data={data} />
    </div>
  );
};

export default AllLogs;
