import {
  DrawerContentScrollView,
  DrawerItem as BaseDrawerItem,
  DrawerItemList as BaseDrawerItemList,
} from '@react-navigation/drawer';
import { Box } from 'native-base';
import styled from 'styled-components/native';
import { UsuarioPicture as UsuarioPictureBase } from '../../media';

export const DrawerContentScroll = styled(DrawerContentScrollView)`
  padding: 5%;
  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.background
      : props.theme.colorMode.colors.background};
`;

export const DrawerItem = styled(BaseDrawerItem)`
  font-size: 35px;
`;

export const Container = styled(Box)`
  gap: 50px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const UserContainer = styled(Box)`
  gap: 10px;
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
  gap: 10px;
`;

export const DrawerItemList = styled(BaseDrawerItemList)`
  font-size: 50px;
`;
