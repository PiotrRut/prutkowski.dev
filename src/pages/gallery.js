import React, { useState, useEffect } from "react";
import { Link } from 'gatsby'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SEO from '../components/seo'
import GradeIcon from '@material-ui/icons/Grade';
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import convert from 'xml-js'
const { BlobServiceClient } = require("@azure/storage-blob");

import Layout from "../components/layout";

// The Gallery page
const Gallery = () => {
  const [images, setImgs] = useState([])

  // MS Azure Blob Service connection string
  const blobSasUrl = `https://${process.env.REACT_APP_AZURE_SPACE}.blob.core.windows.net/?${process.env.REACT_APP_AZURE_TOKEN}`
  // Connect to a new BlobServiceClient
  const blobServiceClient = new BlobServiceClient(blobSasUrl);
  // Get a container client from the BlobServiceClient
  const containerClient = blobServiceClient.getContainerClient(process.env.REACT_APP_AZURE_CONTAINER);

  // On component mount list all blobs inside the connected container, and return their name
  useEffect(() => {
    const fetchBlobs = async () => {  
      for await (const blob of containerClient.listBlobsFlat()) {
        setImgs(images => images.concat(blob.name))
      }
    };
    fetchBlobs();
    console.log(images)
  }, []);
  

  return (
    <Layout>
      <SEO keywords={[`piotr`, `rutkowski`, `prutkowski`, `projects`, `github`]} title="Gallery"/>
      <div className="container grid">
        <br/>
        <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
          <Grid Grid item lg={12} xs={12} xl={12}>
            <b><h2 className="text-gray-400 text-center wow fadeIn"><span>📸</span> Gallery</h2></b>
            <Link to="/"><h6 className="text-center wow fadeIn">Return home</h6></Link>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <p className="text-gray-400 text-center wow fadeIn">
              Below you can see my gallery.
            </p>
            <p className="text-gray-400 text-center wow fadeIn">
              Click on pic.
            </p>
          </Grid>
          {
            images.map((image, index) => (
              <Grid item
                className="wow fadeIn"
                key={image}
                style={{
                  animationDelay: `${index * 100 + 100}ms`,
                }}
              >
                <h6 className="text-gray-400">{image}</h6>
              </Grid>
            ))
          }
        </Grid>
        <br/>
        <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
          <Grid item lg={12} xs={12} xl={12}>
            <Link className="no-underline text-black" to="/">
            <Button className="wow fadeIn" variant="contained" color="inherit" startIcon={<KeyboardBackspaceIcon/>}>
              Return home
            </Button>
            </Link>
          </Grid>
        </Grid>
        <br/><br/><br/>
      </div>
    </Layout>
  );
}

export default Gallery;