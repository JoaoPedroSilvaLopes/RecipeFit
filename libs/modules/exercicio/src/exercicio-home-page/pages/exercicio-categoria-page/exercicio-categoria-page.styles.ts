import { CircularImageButton as CircularButtonBase } from '@nx-workspace//shared/components'
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

export const CircularButton = styled(CircularButtonBase)`
  width: 110px;
  height: 110px;
  border-width: 5px;
  margin: 20px;
  gap: 10px;
`

export const Container = styled(Box)`
  height: 80%;
`
