import React, { useEffect, useState } from "react";
import Statistics from "../components/Statistics";
import { Col, Progress, Row, Space, message } from "antd";
import AveragePriceOverTimeChart from "../components/charts/AveragePriceOverTimeChart";
import BrandPriceComparison from "../components/charts/BrandPriceComparison";
import ModelPriceComparison from "../components/charts/ModelPriceComparison";
import YearPriceComparison from "../components/charts/YearPriceComparison";
import DailyUpload from "../components/charts/DailyUpload";
import PriceCorrelation from "../components/charts/PriceCorrelation";
import TopCars from "../components/TopCars";
import { AxiosInstance } from "../utils/axios.instance";
import { GetDashboard } from "../types/getdashboard";

const Home = () => {
  const [data, setData] = useState<GetDashboard | undefined>();
  const [loading, setLoading] = useState(false);
  function getData() {
    setLoading(true);
    AxiosInstance.get<GetDashboard>("/api/get-dashboard")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        message.error(`Error while getting dashboard: ${err}`);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return loading || !data ? (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Progress type="circle" />
    </div>
  ) : (
    <Space style={{ padding: "22px", width: "100%" }} direction="vertical">
      <Statistics data={data} />
      <Space direction="vertical" style={{ width: "100%" }}>
        <AveragePriceOverTimeChart />
        <BrandPriceComparison />
        <ModelPriceComparison />
        <YearPriceComparison />
        <DailyUpload />
        <Row>
          <Col sm={12}>
            <PriceCorrelation />
          </Col>
          <Col sm={1}></Col>
          <Col sm={11}>
            <TopCars data={data} />
          </Col>
        </Row>
      </Space>
    </Space>
  );
};

export default Home;
