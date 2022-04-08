import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter?.title} />
      {/* {Object.keys(frontmatter).map((item, index) => {
        console.log("item: ", item);
        return (
          <p key={`frontmatter-${index}`}>
            {item}: {frontmatter[item]}
          </p>
        );
      })} */}
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
        keywords
        page_purpose
        audience
        author
        content_owner
      }
    }
  }
`;
