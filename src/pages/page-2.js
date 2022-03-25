import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <main>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </main>
  </Layout>
);

export default SecondPage;
