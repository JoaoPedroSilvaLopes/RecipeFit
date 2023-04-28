import { Button } from '@nx-workspace//shared/components';
import styled from 'styled-components/native';

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
  justify-content: center;
  align-items: center;
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
  width: 188px;
  height: 188px;
  border-radius: 150px;
`;

export const ImagesContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  top: 70px;
  right: -50px;
  position: absolute;
`;

export const RightImage = styled.Image`
  width: 126px;
  height: 126px;
  transform: rotate(345deg);
`;

export const LeftImage = styled.Image`
  width: 126px;
  height: 126px;
  transform: rotate(15deg);
`;
