import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Header,
  HeaderProps,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import {
  PaletteContainer,
  PreviewContainer,
  ThemeContainer,
} from '../components';

import * as S from './theme-page.styles';

const ThemePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const headerConfigs: HeaderProps = {
    title: 'Personalize seu Aplicativo',
  };

  const returnPage = () => {
    navigation.goBack();
  };

  return (
    <S.Screen>
      <Particles />
      <Header {...headerConfigs} />
      <S.Container>
        <PreviewContainer />
        <ThemeContainer />
        <PaletteContainer />
      </S.Container>
      <TextButton title="Retornar" onPress={() => returnPage()} />
    </S.Screen>
  );
};

export default ThemePage;
