import React from "react";
import AppTable from "../components/AppTable";
import { Typography } from "antd";

const AllLogs = () => {
  return (
    <div style={{ padding: "22px" }}>
      <Typography style={{ fontSize: "22px" }}>Ähli maglumatlar</Typography>
      <AppTable />
    </div>
  );
};

export default AllLogs;
