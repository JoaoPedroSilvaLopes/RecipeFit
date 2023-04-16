import styled from 'styled-components/native';

export const Screen = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  padding: 15%;
  background-Color: ${props => props.theme.colors.background};
  align-Items: center;
  gap: 40px;
`;
