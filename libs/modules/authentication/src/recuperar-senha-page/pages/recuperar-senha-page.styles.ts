import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.title === 'dark'
      ? props.theme.colorPalette.primary
      : props.theme.colors.background};
  width: 100%;
`;

export const Container = styled.View`
  margin: 20px 0px;
  width: 100%;
  gap: 10px;
  padding: 5%;
`;

