import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  CircularImageButton,
  Header,
  HeaderProps,
  IconButton,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'native-base';
import { useLoad } from '../../hooks';
import {
  CategoriaExercicioFieldNames,
  ExercicioCategoria,
} from '@nx-workspace//shared/domain-types';
import { getExercicio } from '../../assets';

import * as S from './exericico-home-page.styles';

const ExerciciosHomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const categoriasExercicios = useLoad();

  const headerConfigs: HeaderProps = {
    title: `Exercícios`,
    actions: [
      <IconButton
        icon={<Icon name="favorite" size={15} color={'#fff'} />}
        onPress={() => navToFavoritos()}
      />,
    ],
  };

  const returnPage = () => {
    navigation.goBack();
  };

  const navToFavoritos = () => {
    navigation.navigate('ExercicioFavoritos');
  };

  const navToCategoria = (categoria: ExercicioCategoria) => {
    navigation.navigate('ExercicioCategoria', { ...categoria });
  };

  return (
    <S.Screen>
      <Particles />
      <Header {...headerConfigs} />
      <S.Container>
        <FlatList
          keyExtractor={(item) => item.id}
          data={categoriasExercicios}
          numColumns={2}
          renderItem={(item) => {
            return (
              <CircularImageButton
                backgroundImageUrl={getExercicio(
                  item.item.nomeCategoria as CategoriaExercicioFieldNames
                )}
                title={item.item.nomeCategoria}
                onPress={() => navToCategoria(item.item)}
              />
            );
          }}
        />
      </S.Container>
      <TextButton title="Retornar" onPress={() => returnPage()} />
    </S.Screen>
  );
};

export default ExerciciosHomePage;
