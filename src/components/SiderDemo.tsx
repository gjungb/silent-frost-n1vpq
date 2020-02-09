import React, { useState } from "react";
import SectionNavigation from "./SectionNavigation";
import Folio from "./Folio";

import { Layout, Typography } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const SliderDemo: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
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
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Title />
        </Header>
        <Folio />
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SliderDemo;
