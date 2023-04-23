import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  gap: 40px;
`;

export const Container = styled.View`
  margin: 20px 0px 0px;
  width: 100%;
  height: 80%;
`;
