import { DrawerItem as BaseDrawerItem } from '@react-navigation/drawer';
import styled from 'styled-components/native';

export const DrawerItem = styled(BaseDrawerItem).attrs((props) => ({
  pressColor: props.theme.colorPalette.primary,
  activeBackgroundColor: props.theme.colorPalette.primary,
  activeTintColor: props.theme.colorPalette.primary,
}))``;

export const Container = styled.View`
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${(props) => props.theme.colorMode.colors.textColor};
  font-size: 15px;
`;

export const IconCircle = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colorPalette.secondary};

  align-items: center;
  justify-content: center;
  align-items: center;
`;
