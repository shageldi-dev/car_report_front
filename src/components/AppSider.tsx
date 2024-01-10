import { Typography } from "antd";
import SelectFile from "./SelectFile";

const AppSider = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        gap: "12px",
        color: "white",
        padding: "12px",
      }}
    >
      <Typography.Title style={{ color: "white", textAlign: "center" }}>
        Täze maglumatlar goşmak
      </Typography.Title>
      <SelectFile />
    </div>
  );
};

export default AppSider;
