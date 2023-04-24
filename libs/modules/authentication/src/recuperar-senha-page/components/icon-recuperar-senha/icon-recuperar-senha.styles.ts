import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 150px;
  background-color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorMode.colors.suportColor
      : props.theme.colorPalette.secondary};
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.colorMode.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colorMode.colors.textColor};
  width: 100%;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.colorMode.colors.textColor};
  width: 100%;
`;
