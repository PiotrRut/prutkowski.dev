import React from "react";
import SEO from '../components/seo'
import { Link } from 'gatsby'


import Layout from "../components/layout";

// 404 Route
function PageNotFound() {

  return (
    <Layout>
      <div className="container grid-cols-1 row-gap-16">
        <br />
            <h1 className="text-gray-400">404 Not Found</h1>
            <br/>
            <i><h5 className="text-gray-400">
              &#34;The HTTP 404, 404 Not Found, 404, Page Not Found, or Server Not Found error message 
              is a Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications, 
              to indicate that the browser was able to communicate with a given server, 
              but the server could not find what was requested. 
              The error may also be used when a server does not wish to disclose whether it has the requested information.&#34;
            </h5></i>
            <br/>
            <h3 className="text-gray-400">
              In other words - either you can&#39;t type, or I can&#39;t code.. 
              Either way, you should <Link to="/">go home</Link>!
            </h3>
      </div>
    </Layout>
  );
}

export default PageNotFound;