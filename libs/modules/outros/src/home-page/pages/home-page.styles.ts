import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 15%;
  background-Color: ${props => props.theme.colorMode.colors.background};
  align-Items: center;
  justify-content: space-evenly;
`;
