import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';
import BACKEND_URL from '@misc/backend';
import Layout from '@components/layout';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import SEO from '@components/SEO';
import * as dayjs from 'dayjs';
import { m as motion, MotionConfig } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    // position the dialog properly and add black bg
    margin: -35,
    padding: theme.spacing(5),
    backgroundColor: '#1a1a1a',
  },
  paper: {
    // set colour of the paper dialog
    backgroundColor: '#1a1a1a',
  },
  snackbar: {
    // pull the snackbar up from the bottom on smaller screens
    [theme.breakpoints.down('xs')]: {
      bottom: 70,
    },
  },
  text: {
    color: 'white',
  },
}));

// The Gallery page which displays my images stored in an MS Azure container
const PhotoGallery = () => {
  const [images, setImgs] = useState([{ lowRes: '', highRes: '' }]);
  const [selectedURLS, setUrl] = useState({});
  const [lastUpdated, setUpdated] = useState(Date());
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [features, setFeatures] = useState([]);
  const classes = useStyles();

  // Fetch all image URLs from Azure via my backend and append to array
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/gallery/getAllPhotos`);
      setImgs(response.data.images.reverse());
      setUpdated(response.data.info[0].lastUpdated);
    };
    fetchData();
  }, []);

  useEffect(() => {
    import('@misc/motionConfig').then((res) => {
      setFeatures(res.default);
    });
  }, []);

  // Open picture dialog
  const handleOpen = () => {
    setOpen(true);
  };
  // Close picture dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Open URL snack bar
  const openSnackBar = () => {
    setOpenSnack(true);
  };
  // Close URL snack bar
  const closeSnackBar = () => {
    setOpenSnack(false);
  };

  return (
    <Layout>
      <MotionConfig features={features}>
        <SEO title="Gallery" />
        <div className="container grid-cols-1 gap-y-16">
          <br />
          <Grid
            direction="column"
            justify="center"
            alignItems="center"
            container
            spacing={4}
          >
            <Grid Grid item md={12} lg={12} xs={12} xl={12}>
              <br />
              <Typography variant="h4" component="h1" className={classes.text}>
                📸 My Gallery
              </Typography>
              <h6 className="text-center wow fadeIn">
                <Link href="/" passHref>
                  <a>Return home</a>
                </Link>
              </h6>
            </Grid>
            <Grid item md={12} lg={12} xl={12} xs={12}>
              <Typography className="text-gray-200 text-center wow fadeIn">
                Here you can see some of the pictures I&#39;ve taken!
              </Typography>
              <Typography className="text-gray-200 text-center wow fadeIn">
                These images are compressed to reduce load.
                <br />
                Follow the link from within the preview for full-size!!
              </Typography>
              <Typography className="text-gray-200 text-center wow fadeIn">
                Gallery last updated on{' '}
                {dayjs(lastUpdated).format('D MMM YYYY')}
              </Typography>
              <h6 className="text-gray-200 text-center wow fadeIn">
                Want more? Visit my{' '}
                <a
                  href="https://www.instagram.com/prutkowskii/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                .
              </h6>
            </Grid>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              spacing={4}
            >
              {images.map((image, index) => (
                <Grid
                  item
                  className="wow fadeIn"
                  key={image.lowRes}
                  style={{
                    animationDelay: `${index * 100 + 100}ms`,
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Paper
                      elevation={3}
                      className="gallery-pics"
                      style={{ padding: '8px', background: '#212121' }}
                    >
                      <Grid direction="column" container spacing={2}>
                        <Grid item>
                          <div className="cursor-pointer">
                            <img
                              src={image.lowRes}
                              height="180"
                              width="180"
                              onClick={() => {
                                setUrl({
                                  lowRes: image.lowRes,
                                  highRes: image.highRes,
                                });
                                handleOpen();
                                openSnackBar();
                              }}
                              alt="Image"
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item lg={12} xs={12} xl={12}>
              <br />
              <Link className="no-underline text-black" href="/">
                <Button
                  className="wow fadeIn"
                  variant="contained"
                  color="inherit"
                  startIcon={<KeyboardBackspaceIcon />}
                >
                  Return home
                </Button>
              </Link>
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

          {/* Little snack bar with link to the full res version of each image */}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={openSnack}
            onClose={closeSnackBar}
            message="View full version"
            className={classes.snackbar}
            action={
              <React.Fragment>
                <Button
                  color="secondary"
                  rel="noopener noreferrer"
                  target="_blank"
                  size="small"
                  href={selectedURLS.highRes}
                >
                  CLICK HERE
                </Button>
              </React.Fragment>
            }
          />
          <br />
          <br />
          <br />
        </div>
      </MotionConfig>
    </Layout>
  );
};

export default PhotoGallery;
