import React from "react";
import TopBanner from '../components/TopBanner'
import About from '../components/About'

import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div className="container grid grid-cols-1">
        <TopBanner/>
        <About/>
      </div>
    </Layout>
  );
}

export default IndexPage;
