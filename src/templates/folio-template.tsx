import { Tag, Popover, Button } from "antd";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import PresentationLayout from "../components/PresentationLayout";
import Debugging from "../components/Debugging";

const Folio: React.FC<any> = ({
  data: {
    airtable: { recordId, data: folio }
  }
}) => {
  return (
    <PresentationLayout>
      <Helmet>
        <title>{folio.Name}</title>
      </Helmet>
      <article>
        <h1>{folio.Name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: folio.Inhalt.childMarkdownRemark.html
          }}
        />
        <div>
          {folio.tags && folio.tags.map((tag: string) => <Tag>{tag}</Tag>)}
        </div>
      </article>
      <Debugging recordId={recordId} data={folio} />
    </PresentationLayout>
  );
};

export const query = graphql`
  query readFolio($recordId: String!) {
    airtable(recordId: { eq: $recordId }) {
      recordId
      data {
        Name
        tags
        Inhalt {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
    }
  }
`;

export default Folio;
