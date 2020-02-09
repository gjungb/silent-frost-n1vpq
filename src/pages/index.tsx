import { List, Typography } from "antd";
import "antd/dist/antd.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import PresentationLayout from "../components/PresentationLayout";
import IndexDisplay from "../components/IndexDisplay";

const { Paragraph, Text } = Typography;

const HomePage: React.FC = () => {
  const result = useStaticQuery(graphql`
    {
      allSitePage(filter: { isCreatedByStatefulCreatePages: { eq: false } }) {
        edges {
          node {
            path
            context {
              index
              recordId
              title
            }
          }
        }
      }
    }
  `);
  const {
    allSitePage: { edges: pages }
  } = result;
  return (
    <PresentationLayout>
      <List
        size="small"
        bordered
        dataSource={pages}
        renderItem={({ node: page }: any) => (
          <List.Item>
            <Link to={page.path}>
              <IndexDisplay index={page.context.index} digits={2} suffix=". " />
              <Text>{page.context.title}</Text>
            </Link>
            <Paragraph copyable>{page.context.recordId}</Paragraph>
          </List.Item>
        )}
      />
    </PresentationLayout>
  );
};

export default HomePage;
