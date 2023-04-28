import { Box } from 'native-base';
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
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  width: 80%;
  text-align: center;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorPalette.secondary};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  width: 60%;
  text-align: center;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.textColor};
`;

export const ContainerScreen = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.backgroundContent
      : props.theme.colorMode.colors.background};
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled(Box)`
  height: 80%;
`
