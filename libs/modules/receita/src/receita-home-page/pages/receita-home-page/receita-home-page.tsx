import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  CircularImageButton,
  Header,
  HeaderProps,
  IconButton,
  TextButton,
} from '@nx-workspace//shared/components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'native-base';
import { useLoad } from '../../hooks';
import {
  CategoriaReceitaFieldNames,
  ReceitaCategoria,
} from '@nx-workspace//shared/domain-types';
import { getReceita } from '../../assets';

import * as S from './receita-home-page.styles';

const ReceitaHomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const categoriasReceitas = useLoad();

  const headerConfigs: HeaderProps = {
    title: 'Receitas',
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
    navigation.navigate('ReceitaFavoritos');
  };

  const navToCategoria = (categoria: ReceitaCategoria) => {
    navigation.navigate('ReceitaCategoria', { ...categoria });
  };

  return (
    <S.Screen>
      <S.ContainerScreen shadow={3}>
        <Header {...headerConfigs} />
        <S.Container>
          <FlatList
            keyExtractor={(item) => item.id}
            data={categoriasReceitas}
            numColumns={2}
            renderItem={(item) => {
              return (
                <CircularImageButton
                  backgroundImageUrl={getReceita(
                    item.item.nomeCategoria as CategoriaReceitaFieldNames
                  )}
                  title={item.item.nomeCategoria}
                  onPress={() => navToCategoria(item.item)}
                />
              )
            }}
          />
        </S.Container>
        <TextButton title="Retornar" onPress={() => returnPage()} />
      </S.ContainerScreen>
    </S.Screen>
  );
};

export default ReceitaHomePage;
