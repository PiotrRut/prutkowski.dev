import Button from '@components/Button';
import ImageCard from '@components/ImageCard';
import Section from '@components/Section';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import BACKEND_URL from '@misc/backend';
import { palette } from '@theme/tokens';
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

import { GalleryWrapper, PicButton } from './PhotosPreview.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: -35,
    padding: theme.spacing(5),
    backgroundColor: palette.darkGray,
  },
  paper: {
    // set colour of the paper dialog
    backgroundColor: palette.darkGray,
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

  const handleOpen = () => {
    setOpen(true);
  };

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

      <Button
        name="gallery"
        href="/photogallery"
        label="See more"
        iconRight={<BsChevronRight />}
      />

      {/* Dialog with the selected picture for preview */}
      <Dialog
        className={classes.root}
        onClose={handleClose}
        open={open}
        maxWidth="xs"
      >
        <img src={selectedURLS.lowRes} width="auto" height="auto" />
      </Dialog>
    </Section>
  );
};

export default PhotosPreview;
