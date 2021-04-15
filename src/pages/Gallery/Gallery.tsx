import Button from '@components/Button';
import ImageCard from '@components/ImageCard';
import SEO from '@components/SEO';
import { PicButton } from '@content/PhotosPreview/PhotosPreview.styles';
import { Button as MUIButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import { domAnimation, LazyMotion, m as motion } from 'framer-motion';
import { NextPage } from 'next';
import React, { Fragment, useEffect, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

import { GalleryWrapper } from './Galllery.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // position the dialog properly and add black bg
    margin: -35,
    padding: theme.spacing(5),
    backgroundColor: '#171717',
  },
  paper: {
    // set colour of the paper dialog
    backgroundColor: '#171717',
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
const Gallery: NextPage = () => {
  const [images, setImgs] = useState([{ lowRes: '', highRes: '' }]);
  const [selectedURLS, setUrl] = useState({ lowRes: '', highRes: '' });
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const classes = useStyles();

  // Fetch all image URLs from Azure via my backend and append to array
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/gallery/getAllPhotos`);
      setImgs(response.data.images.reverse());
    };
    fetchData();
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
    <LazyMotion features={domAnimation}>
      <SEO title="Gallery" />
      <br />
      <Typography variant="h4" component="h1" className={classes.text}>
        📸 My Gallery
      </Typography>
      <GalleryWrapper>
        {images.map((image, index) => (
          <motion.div whileHover={{ scale: 1.1 }}>
            {image.lowRes && (
              <PicButton
                onClick={() => {
                  setUrl({
                    lowRes: image.lowRes,
                    highRes: image.highRes,
                  });
                  handleOpen();
                  openSnackBar();
                }}
                key={index}
              >
                <ImageCard path={image?.lowRes} />
              </PicButton>
            )}
          </motion.div>
        ))}
      </GalleryWrapper>

      <Button
        name="home"
        href="/"
        label="Back home"
        iconLeft={<BsChevronLeft />}
      />

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
          <Fragment>
            <MUIButton
              color="secondary"
              rel="noopener noreferrer"
              target="_blank"
              size="small"
              href={selectedURLS.highRes}
            >
              CLICK HERE
            </MUIButton>
          </Fragment>
        }
      />
    </LazyMotion>
  );
};

export default Gallery;
