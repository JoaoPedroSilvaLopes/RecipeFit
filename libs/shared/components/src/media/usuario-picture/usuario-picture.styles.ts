import { Avatar, Box } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import { Button } from '../../general';

export const Container = styled(Box)`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 150px;
  border: 20px;
  margin-top: 20px;
  background-color: transparent;
  border-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.suportColor
      : props.theme.colorPalette.secondary};
`;

export const AvatarContainer = styled(Button)`
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 150px;
  background-color: ${(props) =>
    props.theme.colorMode.colors.backgroundContent};

  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.secondary
      : props.theme.colorPalette.primary};
`;

export const ImageBackground = styled(Avatar)`
  width: 180px;
  height: 180px;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
`;

export const IconPerfil = styled(Icon)`
  color: ${(props) => props.theme.colorMode.colors.suportColor}
`;
