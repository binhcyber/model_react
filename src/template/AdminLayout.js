import React, { useState } from "react";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
import "../page/PageCss/Page.css";
import {
  BarsOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
export default function AdminLayout({ Component }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const history = useHistory();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            onClick={() => {
              history.push("/admin");
            }}
            key="1"
          >
            <UserOutlined
              onClick={() => {
                history.push("/admin");
              }}
            />
            <span
              onClick={() => {
                history.push("/admin");
              }}
            >
              User
            </span>
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              history.push("/manageRoom");
            }}
            key="2"
          >
            <VideoCameraOutlined
              onClick={() => {
                history.push("/manageRoom");
              }}
            />
            <span
              onClick={() => {
                history.push("/manageRoom");
              }}
            >
              Room
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <BarsOutlined
            className="trigger"
            type={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280,
          }}
        >
          <Component />
        </Content>
      </Layout>
    </Layout>
  );
}
