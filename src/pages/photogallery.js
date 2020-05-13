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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(5),
  },
  paper: { // set colour of the paper dialog
    backgroundColor: '#212121',
    color: 'white'
  }
}));


// The Gallery page
function PhotoGallery() {
  const [images, setImgs] = useState([{lowRes: '', highRes: ''}])
  const [selectedURLS, setUrl] = useState([])
  const BACKEND_URL = process.env.NODE_ENV === 'production' ? prodApi : devApi
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  // Fetch all image URLs from Azure via my backend and append to array
  useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`${BACKEND_URL}/blobs`);
        setImgs(response.data);
    }
    fetchData();
  }, []);
  console.log(images)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <Layout>
      <SEO keywords={[`piotr`, `rutkowski`, `prutkowski`, `photography`, `gallery`, `pictures`]} title="Photo Gallery"/>
      <div className="container grid">
        <br/>
        <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
          <Grid Grid item lg={12} xs={12} xl={12}>
            <br/>
            <b><h2 className="text-gray-400 text-center wow fadeIn"><span>📸</span> My Gallery</h2></b>
            <Link to="/"><h6 className="text-center wow fadeIn">Return home</h6></Link>
          </Grid>
          <Grid item md={12} lg={12} xl={12}>
            <p className="text-gray-400 text-center wow fadeIn">
              Here you can see some of the pictures I have taken over the last few months, and which I am 
              proud of!
            </p>
          </Grid>
          {
            images.map((image, index) => (
              <Grid item
                className="wow fadeIn"
                key={image.lowRes}
                style={{
                  animationDelay: `${index * 100 + 100}ms`,
                }}
              >
              <a className="cursor-pointer">
                <img 
                  src={image.lowRes} 
                  height="200" width="200" 
                  onClick={() => { setUrl({lowRes: image.lowRes, highRes: image.highRes}); handleOpen();}}
                />
              </a>
              </Grid>
            ))
          }
        </Grid>
        <br/>
        <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
          <Grid item lg={12} xs={12} xl={12}>
            <br/>
            <Link className="no-underline text-black" to="/">
            <Button className="wow fadeIn" variant="contained" color="inherit" startIcon={<KeyboardBackspaceIcon/>}>
              Return home
            </Button>
            </Link>
          </Grid>
        </Grid>

        {/* Dialog with the selected picture for preview and button to full size version */}
        <Dialog classes={classes} onClose={handleClose} aria-labelledby="customized-dialog-title" maxWidth="xs" open={open}>
          <div className={classes.paper}>
            <img src={selectedURLS.lowRes}/>
          </div>
          <DialogActions>
            <a className="text-gray-400" href={selectedURLS.highRes} rel="noopener noreferrer" target="_blank">
              <Button size="small" color="inherit">
                Download full version
              </Button>
            </a>
            </DialogActions>
        </Dialog>

        <br/><br/><br/>
      </div>
    </Layout>
  );
}

export default PhotoGallery;