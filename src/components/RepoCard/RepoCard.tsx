import LanguageBlob from '@components/LanguageBlob';
import GradeIcon from '@material-ui/icons/Grade';
import SourceFork from 'mdi-material-ui/SourceFork';
import React, { FunctionComponent } from 'react';

import { RepoCardProps } from './RepoCard.models';
import {
  Description,
  Name,
  RepoCardRoot,
  RepoDetails,
  SectionWrapper,
} from './RepoCard.styles';

/**
 * Card component for displaying repository information
 */
const RepoCard: FunctionComponent<RepoCardProps> = (props) => {
  const { name, language, url, description, stars, forks } = props;
  return (
    <RepoCardRoot>
      <Name href={url}>{name}</Name>
      <Description>{description}</Description>
      <RepoDetails>
        <SectionWrapper>
          <LanguageBlob language={language} />
          {language}
        </SectionWrapper>
        {stars >= 1 && (
          <SectionWrapper>
            <GradeIcon fontSize="inherit" />
            {stars}
          </SectionWrapper>
        )}
        {forks >= 1 && (
          <SectionWrapper>
            <SourceFork fontSize="inherit" />
            {forks}
          </SectionWrapper>
        )}
      </RepoDetails>
    </RepoCardRoot>
  );
};

export default RepoCard;
