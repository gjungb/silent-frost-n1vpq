import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Debugging from "../components/Debugging";
import PresentationLayout from "../components/PresentationLayout";

const Chapter: React.FC<any> = ({
  data: {
    airtable: { recordId, data: chapter }
  }
}) => {
  return (
    <PresentationLayout>
      <Helmet>
        <title>{chapter.Name}</title>
      </Helmet>
      <article>
        <h1>{chapter.Name}</h1>
      </article>
      <Debugging recordId={recordId} data={chapter} />
    </PresentationLayout>
  );
};

export const query = graphql`
  query readChapter($recordId: String!) {
    airtable(recordId: { eq: $recordId }) {
      data {
        Name
        Count_of_folio
      }
      recordId
    }
  }
`;

export default Chapter;
