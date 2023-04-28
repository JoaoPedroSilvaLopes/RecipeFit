import { Box, IconButton } from 'native-base';
import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.background
      : props.theme.colorPalette.primary};
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const ContainerScreen = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.backgroundContent
      : props.theme.colorMode.colors.background};
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled.View`
  margin: 20px 0px 0px;
  width: 100%;
  height: 80%;
`;

export const HearthIcon = styled(IconButton)`
  width: auto;
  height: auto;
  background-color: transparent;
`;

