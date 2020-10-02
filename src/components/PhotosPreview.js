import React, { useState, useEffect } from "react";
import { Link } from 'gatsby'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import BACKEND_URL from '../apiRoutes/backend'
import Dialog from '@material-ui/core/Dialog'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'

// Styles override
const useStyles = makeStyles((theme) => ({
  root: {
    margin: -35,
    padding: theme.spacing(5),
    backgroundColor: '#212121',
  },
  paper: { // set colour of the paper dialog
    backgroundColor: '#212121',
    color: 'white',
  },
  text: {
    color: 'white'
  },
}));

// Show four pictures for gallery preview on main page
function PhotosPreview() {
  const [images, setImgs] = useState([{ lowRes: '', highRes: '' }])
  const [selectedURLS, setUrl] = useState([])
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  // Fetch all image URLs from Azure via my backend and append to array
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/gallery/getAllPhotos`);
      setImgs(response.data.reverse());
    }
    fetchData();
  }, []);

  // Open picture preview dialog
  const handleOpen = () => {
    setOpen(true);
  };
  // Close picture preview dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="photos-prev">
      <Grid direction="column" justify="center" alignItems="center" container spacing={3}>
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" className={classes.text}>See my shots!</Typography>
        </Grid>
        <Grid item md={12} xs={12} lg={12} xl={12}>
          <h6 className="text-gray-400 text-center wow fadeIn">
            Below you can see some of my best shots!
            <h6><Link to="/photogallery">Press here to see all of them!</Link></h6>
          </h6>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={3}>
        {images.slice(0, 4).map((image, index) => (
          <Grid item
            className="wow fadeIn"
            key={image.lowRes}
            style={{
              animationDelay: `${index * 150 + 150}ms`,
            }}
          >
            <Paper className="pic-preview-main" elevation={3} style={{ maxHeight: '110vh', padding: '8px', background: '#212121' }}>
              <Grid direction="column" container spacing={2}>
                <Grid item>
                  <a className="cursor-pointer">
                    <img
                      src={image.lowRes}
                      height="180" width="180"
                      onClick={() => { setUrl({ lowRes: image.lowRes, highRes: image.highRes }); handleOpen(); }}
                      alt="Image"
                    />
                  </a>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
        </Grid>
      </Grid>

      {/* Dialog with the selected picture for preview */}
      <Dialog
        classes={classes}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        scroll="body"
        maxWidth="xs"
      >
        <div className={classes.paper}>
          <img className="photoPreview" src={selectedURLS.lowRes} />
        </div>
      </Dialog>

      <br />
      <br />
    </section>
  );
}


export default PhotosPreview;