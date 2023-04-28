import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Header,
  HeaderProps,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import { ExercicioCategoria } from '@nx-workspace//shared/domain-types';
import { FlatList } from 'react-native';
import { useLoadByCategoria } from '../../hooks';

import * as S from './exercicio-categoria-page.styles';

const ExerciciosCategoriaPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const params = useRoute().params as ExercicioCategoria;

  const { data: exercicios } = useLoadByCategoria({ id: params.id });

  const headerConfigs: HeaderProps = {
    title: `Exercícios ${params.nomeCategoria}`,
  };

  const returnPage = () => {
    navigation.goBack();
  };

  return (
    <S.Screen>
      <Particles />
      <Header {...headerConfigs} />
      <S.Container>
        <FlatList
          keyExtractor={(item) => item.id}
          data={exercicios}
          numColumns={2}
          renderItem={(item) => {
            return (
              <S.CircularButton
                title={item.item.nome}
                onPress={() => console.log('')}
              />
            );
          }}
        />
      </S.Container>
      <TextButton title="Retornar" onPress={() => returnPage()} />
    </S.Screen>
  );
};

export default ExerciciosCategoriaPage;
