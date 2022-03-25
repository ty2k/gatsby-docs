import * as React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import styled from "styled-components";

import SearchBar from "./search-bar";

const StyledDiv = styled.div`
  background-color: white;
  border-right: 1px solid #b1b4b6;
  padding: 20px 25px;
  width: 350px;
  min-width: 350px;

  // On very small phone screens, nav menu should take up the entire width
  @media (max-width: 350px) {
    min-width: 100%;
  }

  nav {
    ul {
      list-style: none;
      margin: 0;

      li {
        a {
          font-size: 16px;
          text-decoration: none;

          &:focus,
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default function Navigation({ links }) {
  return (
    <StyledDiv>
      <SearchBar />

      <StaticQuery
        query={graphql`
          query DocsQuery {
            allMarkdownRemark {
              nodes {
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        `}
        render={data => (
          <nav>
            <ul>
              {data?.allMarkdownRemark?.nodes.map((node, index) => {
                if (node?.frontmatter?.slug) {
                  return (
                    <li key={`link-${index}`}>
                      <Link to={node?.frontmatter?.slug}>
                        {node?.frontmatter?.title}
                      </Link>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </nav>
        )}
      />
    </StyledDiv>
  );
}

Navigation.propTypes = {
  links: PropTypes.array,
};

Navigation.defaultProps = {
  links: [],
};
