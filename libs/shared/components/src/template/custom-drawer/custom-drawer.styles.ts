import { DrawerContentScrollView } from '@react-navigation/drawer';
import { UsuarioPicture as UsuarioPictureBase } from '../../media';
import { Box } from 'native-base';
import { Button } from '../../general';
import styled from 'styled-components/native';

export const DrawerContentScroll = styled(DrawerContentScrollView)`
  padding: 5%;
  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.background
      : props.theme.colorMode.colors.background};
`;

export const Container = styled(Box)`
  gap: 10px;
  height: 100%;
  width: 100%;
`;

export const ContainerButtons = styled.ScrollView`
  height: 400px;
`;

export const UsuarioPicture = styled(UsuarioPictureBase)`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.colorMode.colors.textColor};
`;

export const ContentContainer = styled(Box)`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

export const BotaoSair = styled(Button)`
  width: 100%;
  background-color: ${props => props.theme.colorMode.colors.danger};
`
