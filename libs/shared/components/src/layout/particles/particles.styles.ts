import Animated from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1000;
`;

export const CircleParticle = styled(Animated.View)`
  width: 300px;
  height: 300px;
  border-radius: 150px;

  background-color: ${(props) =>
    props.theme.title === 'dark'
      ? props.theme.colors.backgroundContent
      : props.theme.colorPalette.primary};
  z-index: -2000;
`;
