import styled from 'styled-components/native';
import { Spinner as BaseSpinner } from 'native-base';
import { Text, Button } from 'native-base';

export const Label = styled(Text)`
  font-size: 15px;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.textColor};
`;

export const TextButton = styled(Button)`
  width: auto;
  height: auto;
  font-size: 15px;
  font-weight: normal;
  border: none;

  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.textColor};
`;

export const Spinner = styled(BaseSpinner)`
  color: red;
`;
