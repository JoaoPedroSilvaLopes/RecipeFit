import { IconButton as BaseIconButton } from '@nx-workspace//shared/components';
import styled from 'styled-components/native';

export const Screen = styled.View`
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: ${(props) => props.theme.colorMode.colors.background};
  align-items: center;
  gap: 40px;
`;

export const Container = styled.View`
  margin: 20px 0px 0px;
  width: 100%;
  height: 75%;
  justify-content: center;
`;

export const IconButton = styled(BaseIconButton)`
  width: auto;
  height: auto;
  background-color: transparent;
`;
