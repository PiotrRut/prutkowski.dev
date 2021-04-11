import ImageCard from '@components/ImageCard';
import Section from '@components/Section';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { GalleryWrapper, PicButton } from './PhotosPreview.styles';

// Styles override
const useStyles = makeStyles((theme) => ({
  root: {
    margin: -35,
    padding: theme.spacing(5),
    backgroundColor: '#171717',
  },
  paper: {
    // set colour of the paper dialog
    backgroundColor: '#171717',
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
    <Section heading="Gallery">
      <GalleryWrapper>
        {images.slice(0, 4).map((image, index) => (
          <div
            className="wow fadeIn"
            style={{
              animationDelay: `${index * 150 + 150}ms`,
            }}
            key={index}
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
          </div>
        ))}
      </GalleryWrapper>

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
    </Section>
  );
};

export default PhotosPreview;