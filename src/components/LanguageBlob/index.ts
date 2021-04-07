import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Language, languages } from '@misc/languages';
import styled, { css } from 'styled-components';

/**
 * Display a round blob for the passed language in it's GitHub's linguist based colour
 */
const LanguageBlob = styled(FiberManualRecordIcon)<{ language: Language }>`
  ${({ language }) =>
    css`
      color: ${languages[language]};
    `};
`;

export default LanguageBlob;
