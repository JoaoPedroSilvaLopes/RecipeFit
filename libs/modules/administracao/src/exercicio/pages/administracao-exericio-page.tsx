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
  AddExercicioModal,
  EditExercicioModal,
  RemoveExercicioModal,
} from '../components';
import { FlatList } from 'react-native';
import { useModal } from '@nx-workspace//shared/core';
import { Exercicio } from '@nx-workspace//shared/domain-types';
import { useLoad } from '../hooks';

import * as S from './administracao-exericio-page.styles';

const AdministracaoExercicioPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { data: exerciciosData, isLoading } = useLoad();

  const [selectedExercicio, setSelectedExercicio] = useState<Exercicio>();

  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();

  const handleRemove = (exercicio: Exercicio) => {
    setSelectedExercicio(exercicio);
    openRemoveModal();
  };

  const handleEdit = (exercicio: Exercicio) => {
    setSelectedExercicio(exercicio);
    openEditModal();
  };

  const handleAdd = () => {
    openAddModal();
  };

  const headerConfigs: HeaderProps = {
    title: 'Gerenciar Exercícios',
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
              data={exerciciosData}
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
      <AddExercicioModal isOpen={isAddModalOpen} onClose={closeAddModal} />
      <EditExercicioModal
        id={selectedExercicio?.id}
        nome={selectedExercicio?.nome}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      />
      <RemoveExercicioModal
        id={selectedExercicio?.id}
        nome={selectedExercicio?.nome}
        isOpen={isRemoveModalOpen}
        onClose={closeRemoveModal}
      />
    </>
  );
};

export default AdministracaoExercicioPage;
