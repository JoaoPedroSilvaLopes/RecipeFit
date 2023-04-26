import styled from 'styled-components/native';
import Button from '../button/button';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CircularButton = styled(Button)`
  width: 200px;
  height: 200px;
  border-width: 12px;
  border-radius: 150px;

  background-color: ${(props) =>
    props.theme.colorMode.colors.backgroundContent};
  border-color: ${(props) => props.theme.colorMode.colors.suportColor};
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorPalette.secondary};
`;

export const ImageBackground = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 150px;

  background-color: ${(props) =>
    props.theme.colorMode.colors.backgroundContent};
  border-color: ${(props) => props.theme.colorMode.colors.suportColor};
`;
