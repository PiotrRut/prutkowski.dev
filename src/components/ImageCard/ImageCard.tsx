import Image from 'next/image';
import React, { FunctionComponent } from 'react';

import { ImageCardProps } from './ImageCard.models';
import { ImageCardRoot, ImageWrapper } from './ImageCard.styles';

/**
 * Card component for displaying repository information
 */
const ImageCard: FunctionComponent<ImageCardProps> = (props) => {
  const { path } = props;
  return (
    <ImageCardRoot>
      <ImageWrapper>
        <Image src={path} layout="fill" objectFit="cover" />
      </ImageWrapper>
    </ImageCardRoot>
  );
};

export default ImageCard;
