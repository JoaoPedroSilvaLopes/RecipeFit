import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  CircularButton,
  Header,
  HeaderProps,
  IconButton,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import {
  AlimentosImage,
  Diet,
  ExerciciosImage,
  Halteres,
  Vegetable,
} from '@nx-workspace//shared/assets';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './home-page.styles';
import { Sidebar } from '../components';

const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const signOut = () => {
    auth().signOut();
  };

  const headerConfigs: HeaderProps = {
    actions: [
      <IconButton
        icon={<Icon name="gear" size={15} color={'#fff'} />}
        onPress={() => navToPerfil()}
      />,
    ],
  };

  const navToPerfil = () => {
    navigation.navigate('Perfil');
  };

  const navToTheme = () => {
    navigation.navigate('Theme');
  };

  const navToAlimentoHome = () => {
    navigation.navigate('ExercicioHome');
  };

  const navToExercicioHome = () => {
    navigation.navigate('ExercicioHome');
  };

  return (
    <S.Screen>
      <Particles />
      {/* <Sidebar /> */}
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
        onPress={() => navToExercicioHome()}
      />
      <S.Teste>
        <TextButton title="Sair" onPress={() => signOut()} />
        <TextButton title="Perfil" onPress={() => navToPerfil()} />
        <TextButton title="Theme" onPress={() => navToTheme()} />
      </S.Teste>
    </S.Screen>
  );
};

export default HomePage;
