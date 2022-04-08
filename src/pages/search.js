import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Seo from "../components/seo";

const StyledSearchResult = styled.div``;

const SearchResult = ({ title, description }) => {
  return (
    <StyledSearchResult>
      <strong>{title}</strong>
      <p>{description}</p>
    </StyledSearchResult>
  );
};

const SearchPage = () => {
  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : null
  );
  const query = params.get("q");

  return (
    <Layout>
      <Seo title="Search" />
      <main>
        <h1>Search</h1>
        <p>
          Displaying results for <strong>{query}</strong>
        </p>
        {/* <SearchResult title="Test" description="test" /> */}
      </main>
    </Layout>
  );
};

export default SearchPage;
