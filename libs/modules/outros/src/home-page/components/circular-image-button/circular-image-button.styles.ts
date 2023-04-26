import styled from 'styled-components/native';
import { CircularButton as BaseCircularButton } from '@nx-workspace//shared/components';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CircularButton = styled(BaseCircularButton)`
  width: 200px;
  height: 200px;
`;

export const RightImage = styled.Image`
  width: 126px;
  height: 126px;
  margin: -25px 0px;
  position: absolute;
  top: -60px;
  right: 10px;
  z-index: 2;
  transform: rotate(350deg);
  background-color: red;
`;

export const LeftImage = styled.Image`
  width: 126px;
  height: 126px;
  margin: -25px 0px;
  position: absolute;
  top: 100px;
  right: 90px;
  z-index: 2;
  transform: rotate(10deg);
  background-color: red;
`;
