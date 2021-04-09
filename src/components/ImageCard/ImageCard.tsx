import Image from 'next/image';
import React, { FunctionComponent } from 'react';

import { ImageCardProps } from './ImageCard.models';
import { ImageCardRoot, ImageWrapper } from './ImageCard.styles';

/**
 * Given an image path will display a Next Image component in a
 * small preview format
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
