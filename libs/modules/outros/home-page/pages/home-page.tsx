import React from 'react';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CircularButton,
  IconButton,
  Header,
  HeaderProps,
  TextButton,
} from '../../../../shared/components/';
import {
  AlimentosImage,
  Diet,
  ExerciciosImage,
  Halteres,
  Vegetable,
} from '../../../../shared/assets/menu-images';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './home-page.styles';

const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const signOut = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate('Login'));
  };

  const headerConfigs: HeaderProps = {
    actions: [
      <IconButton icon={<Icon name="gear" size={25} color={'#fff'} />} />,
    ],
  };

  return (
    <SafeAreaView style={S.styles.screen}>
      <Header {...headerConfigs} />
      <CircularButton
        title="Alimentação"
        rightImageUrl={Diet}
        leftImageUrl={Vegetable}
        backgroundImageUrl={AlimentosImage}
      />
      <CircularButton
        title="Exercícios"
        rightImageUrl={Halteres}
        backgroundImageUrl={ExerciciosImage}
      />
      <TextButton title="Sair" onPress={() => signOut()} />
    </SafeAreaView>
  );
};

export default HomePage;
