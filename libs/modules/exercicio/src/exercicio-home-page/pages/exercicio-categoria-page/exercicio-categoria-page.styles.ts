import { CircularImageButton as CircularButtonBase } from '@nx-workspace//shared/components';
import { Box } from 'native-base';
import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 20% 10% 10%;
  background-color: ${(props) => props.theme.colorMode.colors.background};
  align-items: center;
  justify-content: space-around;
`;

export const SubTitle = styled.Text`
  margin-top: 50px;
  font-size: 15px;
  width: 60%;
  text-align: center;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorPalette.secondary};
`;

export const CircularButton = styled(CircularButtonBase)`
  width: 110px;
  height: 110px;
  border-width: 5px;
  margin: 20px;
  gap: 10px;
`;

export const Container = styled(Box)`
  height: 80%;
`;
