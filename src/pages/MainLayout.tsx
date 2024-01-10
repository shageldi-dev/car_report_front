import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/Header";
import AppSider from "../components/AppSider";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: 64,
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(5px)",
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 1,
};

const contentStyle: React.CSSProperties = {
  minHeight: "70vh",
  paddingTop: "67px",
  zIndex: 0,
};

const siderStyle: React.CSSProperties = {
  lineHeight: "100vh",
  position: "fixed",
  width: "100%",
  top: 0,
};

const footerStyle: React.CSSProperties = {
  color: "#fff",
  position: "fixed",
  width: "100%",
  bottom: 0,
  backgroundColor: "#4096ff",
  zIndex: 1,
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};

const MainLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle}>
        <AppSider />
      </Sider>
      <Layout style={{ marginLeft: "20%" }}>
        <Header style={headerStyle}>
          <AppHeader />
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        {/* <Footer style={footerStyle}>{new Date().getFullYear()}</Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
