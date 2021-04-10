import ImageCard from '@components/ImageCard';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { PicButton } from './PhotosPreview.styles';

// Styles override
const useStyles = makeStyles((theme) => ({
  root: {
    margin: -35,
    padding: theme.spacing(5),
    backgroundColor: '#1a1a1a',
  },
  paper: {
    // set colour of the paper dialog
    backgroundColor: '#1a1a1a',
    color: 'white',
  },
  text: {
    color: 'white',
  },
}));

// Show four pictures for gallery preview on main page
const PhotosPreview: FunctionComponent = () => {
  const [images, setImgs] = useState([{ lowRes: '', highRes: '' }]);
  const [selectedURLS, setUrl] = useState({ lowRes: '', highRes: '' });
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  // Fetch all image URLs from Azure via my backend and append to array
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/gallery/getAllPhotos`);
      setImgs(response.data.images.reverse());
    };
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
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item lg={12} xs={12} xl={12}>
          <Typography variant="h4" className={`wow fadeIn ${classes.text}`}>
            Gallery
          </Typography>
        </Grid>
        <Grid container item justify="center" alignItems="center" spacing={3}>
          {images.slice(0, 4).map((image, index) => (
            <Grid
              item
              className="wow fadeIn"
              key={image.lowRes}
              style={{
                animationDelay: `${index * 150 + 150}ms`,
              }}
            >
              {image.lowRes && (
                <PicButton
                  onClick={() => {
                    setUrl({
                      lowRes: image.lowRes,
                      highRes: image.highRes,
                    });
                    handleOpen();
                  }}
                >
                  <ImageCard path={image?.lowRes} />
                </PicButton>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12}>
          <Link href="/photogallery" passHref>
            <Button
              className="wow fadeIn"
              variant="contained"
              color="inherit"
              endIcon={<NavigateNextIcon />}
            >
              See more
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* Dialog with the selected picture for preview */}
      <Dialog
        className={classes.root}
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
};

export default PhotosPreview;
