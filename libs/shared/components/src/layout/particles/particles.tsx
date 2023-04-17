import { Animated } from 'react-native';
import { useState } from 'react';
import * as S from './particles.styles';

const Particles: React.FC = () => {
  const positionCircle_1 = useState(
    new Animated.ValueXY({ x: -120, y: -120 })
  )[0];
  const positionCircle_2 = useState(
    new Animated.ValueXY({ x: 110, y: -460 })
  )[0];
  const positionCircle_3 = useState(
    new Animated.ValueXY({ x: 150, y: -200 })
  )[0];
  const positionCircle_4 = useState(
    new Animated.ValueXY({ x: 50, y: -350 })
  )[0];

  Animated.loop(
    Animated.sequence([
      Animated.timing(positionCircle_1, {
        toValue: { x: -130, y: -110 },
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(positionCircle_1, {
        toValue: { x: -120, y: -120 },
        duration: 8000,
        useNativeDriver: false,
      }),
    ])
  ).start();

  Animated.loop(
    Animated.sequence([
      Animated.timing(positionCircle_2, {
        toValue: { x: 100, y: -450 },
        duration: 8000,
        useNativeDriver: false,
      }),
      Animated.timing(positionCircle_2, {
        toValue: { x: 110, y: -460 },
        duration: 8000,
        useNativeDriver: false,
      }),
    ])
  ).start();

  Animated.loop(
    Animated.sequence([
      Animated.timing(positionCircle_3, {
        toValue: { x: 140, y: -190 },
        duration: 10000,
        useNativeDriver: false,
      }),
      Animated.timing(positionCircle_3, {
        toValue: { x: 150, y: -200 },
        duration: 10000,
        useNativeDriver: false,
      }),
    ])
  ).start();

  Animated.loop(
    Animated.sequence([
      Animated.timing(positionCircle_4, {
        toValue: { x: 40, y: -340 },
        duration: 10000,
        useNativeDriver: false,
      }),
      Animated.timing(positionCircle_4, {
        toValue: { x: 50, y: -350 },
        duration: 10000,
        useNativeDriver: false,
      }),
    ])
  ).start();

  return (
    <S.Container>
      <Animated.View style={positionCircle_1.getLayout()}>
        <S.CircleParticle style={{ opacity: 0.5 }} />
      </Animated.View>
      <Animated.View style={positionCircle_2.getLayout()}>
        <S.CircleParticle style={{ opacity: 0.75 }} />
      </Animated.View>
      <Animated.View style={positionCircle_3.getLayout()}>
        <S.CircleParticle style={{ opacity: 0.5 }} />
      </Animated.View>
      <Animated.View style={positionCircle_4.getLayout()}>
        <S.CircleParticle style={{ opacity: 0.5 }} />
      </Animated.View>
    </S.Container>
  );
};

export default Particles;
