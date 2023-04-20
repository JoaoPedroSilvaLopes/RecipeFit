import { IconButton as IconButtonBase } from 'native-base';
import styled from 'styled-components/native';

export const IconButtonWrapper = styled(IconButtonBase)`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  background-color: ${props => props.theme.colorPalette.secondary};
`;

