import Image from 'next/image';
import React, { FunctionComponent } from 'react';

import { ProjectCardProps } from './ProjectCard.models';
import {
  Description,
  ImageWrapper,
  InfoSection,
  ProjectCardRoot,
  TeamInfo,
  Title,
  TitleAsLink,
} from './ProjectCard.styles';

/**
 * Card component for displaying non-github projects
 */
const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  const { picturePath, path, description, title, team } = props;
  return (
    <ProjectCardRoot>
      <ImageWrapper>
        <Image
          src={picturePath ?? '/social.webp'}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <InfoSection>
        {path ? (
          <TitleAsLink href={path}>{title}</TitleAsLink>
        ) : (
          <Title>{title}</Title>
        )}
        <Description>{description}</Description>
        {team && <TeamInfo>Team: {team}</TeamInfo>}
      </InfoSection>
    </ProjectCardRoot>
  );
};

export default ProjectCard;
