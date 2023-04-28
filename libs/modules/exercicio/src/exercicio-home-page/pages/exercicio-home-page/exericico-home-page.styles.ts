import { Box } from 'native-base';
import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 10%;
  background-Color: ${props => props.theme.colorMode.colors.background};
  align-Items: center;
  justify-content: space-around;
`;

export const Container = styled(Box)`
  height: 80%;
  justify-content: center;
  align-items: center;
`
