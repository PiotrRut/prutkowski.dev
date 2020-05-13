import React, { useState, useEffect } from "react";
import { Link } from 'gatsby'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import SEO from '../components/seo'
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import devApi from '../apiRoutes/devApi'
import prodApi from '../apiRoutes/prodApi'
import Layout from "../components/layout";
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// Show four pictures for gallery preview on main page
const PhotosPreview = () => {
    const [images, setImgs] = useState([{lowRes: '', highRes: ''}])
  
    const BACKEND_URL = process.env.NODE_ENV === 'production' ? prodApi : devApi
    // Fetch all image URLs from Azure via my backend and append to array
    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get(`${BACKEND_URL}/blobs`);
          setImgs(response.data);
      }
      fetchData();
    }, []);
    console.log(images)

  return (
    <section id="photos-prev">
      <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
      <Grid item lg={12} xs={12} xl={12}>
        <b><h3 className="text-gray-400 text-center wow fadeIn">Did someone say cheese?</h3></b>
        </Grid>
        <Grid item md={12} xs={12} lg={12} xl={12}>
          <p className="text-gray-400 text-center wow fadeIn">
            Below you can see some of my best shots!
            <Link to="/photogallery"><h6>Press here to see all of them!</h6></Link>
          </p>
        </Grid>
        {images.slice(0, 4).map((image, index) => (
          <Grid item
            className="wow fadeIn"
            key={image.lowRes}
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
          >
            <Paper elevation={3} style={{width: '200px', maxHeight: '110vh', padding: '15px', background: '#212121',}}>
              <Grid direction="column" container spacing={2}>
                <Grid item>
                  <img 
                    src={image.lowRes} 
                    height="200" width="200" 
                    
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
    </section>
  );
};

export default PhotosPreview;