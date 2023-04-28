import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import {
  Header,
  HeaderProps,
  IconButton,
  Particles,
} from '@nx-workspace//shared/components';
import { CircularImageButton } from '../components';
import { assetsUrl } from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './home-page.styles';

const HomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const headerConfigs: HeaderProps = {
    actions: [
      <IconButton
        key="menu-button"
        icon={<Icon name="gear" size={15} color={'#fff'} />}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />,
    ],
  };

  const navToAlimentoHome = () => {
    navigation.navigate('ExerciciosScreen');
  };

  const navToExercicioHome = () => {
    navigation.navigate('ExerciciosScreen');
  };

  return (
    <S.Screen>
      <Particles />
      <Header {...headerConfigs} />
      <CircularImageButton
        title="Alimentação"
        rightImageUrl={assetsUrl.dietImage}
        leftImageUrl={assetsUrl.vegetableImage}
        backgroundImageUrl={assetsUrl.alimentosImage}
        onPress={() => navToAlimentoHome()}
      />
      <CircularImageButton
        title="Exercícios"
        rightImageUrl={assetsUrl.halteres}
        backgroundImageUrl={assetsUrl.exerciciosImage}
        onPress={() => navToExercicioHome()}
      />
    </S.Screen>
  );
};

export default HomePage;
