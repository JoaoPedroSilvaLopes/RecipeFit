import { Box, Avatar } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const Container = styled(Box)`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 150px;
  border: 20px;
  margin-top: 20px;
  border-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.suportColor
      : props.theme.colorPalette.secondary};
`;

export const ImageBackground = styled(Avatar)`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 150px;
  background-color: ${(props) => props.theme.colorMode.colors.backgroundContent};
`;

export const IconPerfil = styled(Icon)`
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.backgroundContent
      : props.theme.colorPalette.primary};
`
