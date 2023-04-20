import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import Button from '../button/button';

export const CircleButton = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 150px;
  //background: transparent;
`;

export const CircleContent = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 150px;
`;
