import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  FlatCard,
  Header,
  HeaderProps,
  TextButton,
} from '@nx-workspace//shared/components';
import { RemoveReceitaModal } from '../components';
import { useModal } from '@nx-workspace//shared/core';
import { FlatList } from 'react-native';
import IconActions from 'react-native-vector-icons/MaterialCommunityIcons';

import * as S from './receita-favoritos-page.styles';

const ReceitaHomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const headerConfigs: HeaderProps = {
    title: 'Exercícios Favoritos',
  };

  const returnPage = () => {
    navigation.goBack();
  };

  const exerciciosData = [
    {
      id: 'a',
      nome: 'aaaa',
    },
    {
      id: 'b',
      nome: 'aaaa',
    },
    {
      id: 'c',
      nome: 'aaaa',
    },
    {
      id: 'd',
      nome: 'aaaa',
    },
  ];

  const [isModalOpen, openModal, closeModal] = useModal();

  const handleModal = () => {
    openModal();
  };

  return (
    <>
      <S.Screen>
        <S.ContainerScreen>
          <Header {...headerConfigs} />
          <S.Container>
            <FlatList
              keyExtractor={(item) => item.id}
              data={exerciciosData}
              contentContainerStyle={{ padding: 20 }}
              numColumns={1}
              renderItem={(item) => {
                return (
                  <FlatCard
                    key={item.item.id}
                    title={item.item.nome}
                    actions={[
                      <S.HearthIcon
                        icon={
                          <IconActions
                            name="eye"
                            size={25}
                            color={'#518ce6'}
                            onPress={() => console.log}
                          />
                        }
                        shadow={'none'}
                      />,
                      <S.HearthIcon
                        icon={
                          <IconActions
                            name="heart-remove"
                            size={25}
                            color={'#ff6c6c'}
                            onPress={() => console.log()}
                          />
                        }
                        shadow={'none'}
                      />,
                    ]}
                  />
                );
              }}
            />
          </S.Container>
          <TextButton title="Retornar" onPress={() => returnPage()} />
        </S.ContainerScreen>
      </S.Screen>
      <RemoveReceitaModal
        id={0}
        nome={'teste'}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ReceitaHomePage;
