import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import IconActions from 'react-native-vector-icons/FontAwesome5';
import {
  FlatCard,
  Header,
  HeaderProps,
  IconButton,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import {
  AddReceitaModal,
  EditReceitaModal,
  RemoveReceitaModal,
} from '../components';
import { FlatList } from 'react-native';
import { useModal } from '@nx-workspace//shared/core';
import { Receita } from '@nx-workspace//shared/domain-types';
import { useLoad } from '../hooks';

import * as S from './administracao-receita-page.styles';

const AdministracaoReceitaPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { data: receitasData, isLoading } = useLoad();

  const [selectedReceita, setSelectedReceita] = useState<Receita>();

  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();

  const handleRemove = (receita: Receita) => {
    setSelectedReceita(receita);
    openRemoveModal();
  };

  const handleEdit = (receita: Receita) => {
    setSelectedReceita(receita);
    openEditModal();
  };

  const handleAdd = () => {
    openAddModal();
  };

  const headerConfigs: HeaderProps = {
    title: 'Gerenciar Receitas',
    actions: [
      <IconButton
        icon={<Icon name="plus" size={15} color={'#fff'} />}
        onPress={() => handleAdd()}
      />,
    ],
  };

  const returnPage = () => {
    navigation.goBack();
  };

  return (
    <>
      <S.Screen>
        <Particles />
        <Header {...headerConfigs} />
        <S.Container>
          {isLoading ? (
            <S.Spinner size={'lg'}/>
          ) : (
            <FlatList
              keyExtractor={(item) => item.id}
              data={receitasData}
              contentContainerStyle={{ padding: 20 }}
              numColumns={1}
              renderItem={(item) => {
                return (
                  <FlatCard
                    key={item.item.id}
                    title={item.item.nome}
                    actions={[
                      <S.IconButton
                        icon={
                          <IconActions
                            key="pen"
                            name="pen"
                            size={18}
                            color={'#ffce6c'}
                            onPress={() => handleEdit(item.item)}
                          />
                        }
                        shadow={'none'}
                      />,
                      <S.IconButton
                        icon={
                          <IconActions
                            key="trash"
                            name="trash"
                            size={18}
                            color={'#ff6c6c'}
                            onPress={() => handleRemove(item.item)}
                          />
                        }
                        shadow={'none'}
                      />,
                    ]}
                  />
                );
              }}
            />
          )}
        </S.Container>
        <TextButton title="Retornar" onPress={() => returnPage()} />
      </S.Screen>
      <AddReceitaModal isOpen={isAddModalOpen} onClose={closeAddModal} />
      <EditReceitaModal
        id={selectedReceita?.id}
        nome={selectedReceita?.nome}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      />
      <RemoveReceitaModal
        id={selectedReceita?.id}
        nome={selectedReceita?.nome}
        isOpen={isRemoveModalOpen}
        onClose={closeRemoveModal}
      />
    </>
  );
};

export default AdministracaoReceitaPage;
