import React from "react";
import { CarOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import { GetDashboard } from "../types/getdashboard";

interface IProps {
  data: GetDashboard | undefined;
}

const Statistics = (props: IProps) => {
  return (
    <div>
      <Row gutter={12}>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Umumy sany"
              value={props.data?.total ? Number(props.data.total.value) : 0}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CarOutlined />}
              suffix=""
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Brand sany"
              value={
                props.data?.brand_count
                  ? Number(props.data.brand_count.value)
                  : 0
              }
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CarOutlined />}
              suffix=""
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Model sany"
              value={
                props.data?.model_count
                  ? Number(props.data.model_count.value)
                  : 0
              }
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<CarOutlined />}
              suffix=""
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Ortalama bahasy"
              value={
                props.data?.price_avg ? Number(props.data.price_avg.value) : 0
              }
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<MoneyCollectOutlined />}
              suffix=""
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
