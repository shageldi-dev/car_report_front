import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Row, Space, Upload } from "antd";
import { AxiosInstanceFormData } from "../utils/axios.instance";

const { Dragger } = Upload;

const SelectFile: React.FC = () => {
  const [loading, setLoading] = useState(false);

  let file: any | undefined;

  function upload() {
    if (file) {
      setLoading(true);
      const data = new FormData();
      data.append("report", file);
      AxiosInstanceFormData.post("/upload", data)
        .then((res) => {
          setLoading(false);
          console.log(res);
          message.success(`file uploaded successfully.`);
        })
        .catch((err) => {
          setLoading(false);
          message.error(`file upload failed.${err}`);
        });
    } else {
      message.warning("Please select file");
    }
  }

  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "",
    onChange(info) {
      console.log(info.file.originFileObj);
      file = info.file.originFileObj;
      // const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Row style={{ flexDirection: "column" }}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text" style={{ color: "white" }}>
          Click or drag file to this area to upload
        </p>
      </Dragger>
      <Button
        onClick={() => upload()}
        loading={loading}
        style={{ marginTop: "12px" }}
      >
        Send
      </Button>
    </Row>
  );
};

export default SelectFile;
