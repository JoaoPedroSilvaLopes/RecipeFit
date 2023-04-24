import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: ${(props) => props.theme.colorMode.colors.background};
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
`;

export const Container = styled.View`
  margin: 20px 0px;
  width: 100%;
  gap: 20px;
`;
