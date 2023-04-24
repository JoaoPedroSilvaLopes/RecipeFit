import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const UploadScreen = styled(Button)`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colorMode.colors.backgroundContent};
`

export const ImageBackground = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 270px;
  background-color: ${(props) => props.theme.colorMode.colors.backgroundContent};
`;

export const IconPerfil = styled(Icon)`
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.background
      : props.theme.colorPalette.primary};
`
