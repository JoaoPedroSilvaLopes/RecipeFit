import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  CircularImageButton,
  Header,
  HeaderProps,
  TextButton,
} from '@nx-workspace//shared/components';
import { ExercicioCategoria } from '@nx-workspace//shared/domain-types';
import { FlatList } from 'react-native';
import { useLoadByCategoria } from '../../hooks';

import * as S from './receita-categoria-page.styles';

const ReceitaCategoriaPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const params = useRoute().params as ExercicioCategoria;

  const { data: exercicios } = useLoadByCategoria({ id: params.id });

  const headerConfigs: HeaderProps = {
    title: `Receitas ${params.nomeCategoria}`,
  };

  const returnPage = () => {
    navigation.goBack();
  };

  return (
    <S.Screen>
      <S.ContainerScreen shadow={3}>
        <S.Title>{`Receitas ${params.nomeCategoria}`}</S.Title>
        <S.SubTitle>{'Qual receita deseja visualizar?'}</S.SubTitle>
        <S.Container>
          <FlatList
            keyExtractor={(item) => item.id}
            data={exercicios}
            numColumns={2}
            renderItem={(item) => {
              return (
                <CircularImageButton
                  backgroundImageUrl={item.item.foto}
                  title={item.item.nome}
                  onPress={() => console.log('')}
                />
              );
            }}
          />
        </S.Container>
        <TextButton title="Retornar" onPress={() => returnPage()} />
      </S.ContainerScreen>
    </S.Screen>
  );
};

export default ReceitaCategoriaPage;
