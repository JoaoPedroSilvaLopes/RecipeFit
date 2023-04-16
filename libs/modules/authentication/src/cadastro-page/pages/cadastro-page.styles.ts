import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 15%;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.Text`
  font-size: 45px;
  font-weight: bold;
  color: ${(props) => props.theme.colorPalette.primary};
  width: 100%;
  padding: 0px 50px;
`;

export const Container = styled.View`
  width: 100%;
  gap: 10px;
`;
