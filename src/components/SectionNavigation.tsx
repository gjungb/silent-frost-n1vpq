import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { Menu } from "antd";

import IndexDisplay from "./IndexDisplay";

const { SubMenu } = Menu;

type Props = {
  collapsed: boolean;
};

const SectionNavigation: React.FC<Props> = ({ collapsed }) => {
  const result = useStaticQuery<readChaptersQuery>(graphql`
    query readChapters {
      allAirtable(filter: { table: { eq: "chapter" } }) {
        edges {
          node {
            recordId
            chapter: data {
              Name
              folios: folio {
                recordId
                folio: data {
                  Name
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    allAirtable: { edges: chapters }
  } = result;
  return (
    <Menu theme="dark" mode="inline">
      {chapters.map(({ node: { recordId, chapter } }: any, outer: number) => (
        <SubMenu
          key={recordId}
          title={
            <span>
              <IndexDisplay index={outer} digits={2} />
              <span style={{ marginLeft: "10px" }}>{chapter.Name}</span>
            </span>
          }
        >
          {chapter.folios.map(({ recordId, folio }: any, inner: number) => (
            <Menu.Item key={recordId}>
              <Link to="/TODO">
                <span>
                  <IndexDisplay index={outer} suffix="." />
                  <IndexDisplay index={inner} />
                  <span style={{ marginLeft: "10px" }}>{folio.Name}</span>
                </span>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default SectionNavigation;
