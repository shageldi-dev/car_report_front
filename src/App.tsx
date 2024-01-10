import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import AllLogs from "./pages/AllLogs";

function App() {
  return (
    <>
      <ConfigProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="logs" element={<AllLogs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
