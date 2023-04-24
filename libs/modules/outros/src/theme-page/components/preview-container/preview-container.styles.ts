import { Box } from 'native-base';
import styled from 'styled-components/native';

export const Title = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.colorMode.colors.textColor};
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const PreviewGroup = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PreviewContent = styled(Box)<{
  variant: 'pagina-inicial' | 'alimentacao' | 'exercicio';
}>`
  padding: 15px;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  height: 150px;
  border-radius: 10px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'pagina-inicial':
        return (props) => props.theme.colorMode.colors.background;
      case 'exercicio':
        return (props) => props.theme.colorMode.colors.background;
      default:
        return (props) =>
          props.theme.colorMode.title === 'dark'
            ? (props) => props.theme.colorMode.colors.background
            : (props) => props.theme.colorPalette.primary;
    }
  }};
`;

export const TitleContent = styled.Text<{
  variant: 'pagina-inicial' | 'alimentacao' | 'exercicio';
}>`
  font-size: 10px;
  color: ${({ variant }) => {
    switch (variant) {
      case 'pagina-inicial':
        return (props) =>
          props.theme.colorMode.title === 'dark'
            ? (props) => props.theme.colorPalette.primary
            : (props) => props.theme.colorPalette.secondary;
      case 'alimentacao':
        return (props) =>
          props.theme.colorMode.title === 'dark'
            ? (props) => props.theme.colorPalette.primary
            : (props) => props.theme.colorMode.colors.background;
      default:
        return (props) =>
          props.theme.colorMode.title === 'dark'
            ? (props) => props.theme.colorPalette.primary
            : (props) => props.theme.colorPalette.secondary;
    }
  }};
`;
