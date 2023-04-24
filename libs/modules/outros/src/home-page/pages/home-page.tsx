import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import {
  CircularButton,
  Header,
  HeaderProps,
  IconButton,
  Particles,
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

const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const headerConfigs: HeaderProps = {
    actions: [
      <IconButton
        key='menu-button'
        icon={<Icon name="gear" size={15} color={'#fff'} />}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />,
    ],
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
      <Header {...headerConfigs} />
      <CircularButton
        title="Alimentação"
        rightImageUrl={Diet}
        leftImageUrl={Vegetable}
        backgroundImageUrl={AlimentosImage}
        onPress={() => navToAlimentoHome()}
      />
      <CircularButton
        title="Exercícios"
        rightImageUrl={Halteres}
        backgroundImageUrl={ExerciciosImage}
        onPress={() => navToExercicioHome()}
      />
    </S.Screen>
  );
};

export default HomePage;
