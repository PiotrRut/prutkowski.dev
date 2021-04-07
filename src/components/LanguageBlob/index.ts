import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Colors, getHexColour } from 'github-linguist-colours';
import styled, { css } from 'styled-components';

/**
 * Display a round blob for the passed language in it's GitHub's linguist based colour
 */
const LanguageBlob = styled(FiberManualRecordIcon)<{ language: Colors }>`
  ${({ language }) =>
    css`
      color: ${getHexColour(language)};
    `};
`;

export default LanguageBlob;
