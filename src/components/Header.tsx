import { Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();
  return (
    <Space style={{ height: "64px", alignItems: "center" }}>
      <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>
        Statistika
      </Typography>
      <Button type="default" onClick={() => navigate("/")}>
        Esasy sahypa
      </Button>
      <Button type="primary" onClick={() => navigate("/logs")}>
        Ähli maglumatlar
      </Button>
    </Space>
  );
};

export default AppHeader;
