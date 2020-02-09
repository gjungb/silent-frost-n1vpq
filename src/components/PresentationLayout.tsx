import React, { useState } from "react";
import { Layout, Typography } from "antd";
import { Link } from "gatsby";
import SectionNavigation from "./SectionNavigation";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const PresentationLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <SectionNavigation collapsed={collapsed} />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, padding: 20 }}>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Title>
            <Link to="/">TypeScript - Einführung und Grundlagen</Link>
          </Title>
        </Header>
        <Content>
          <main role="main">{children}</main>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PresentationLayout;
