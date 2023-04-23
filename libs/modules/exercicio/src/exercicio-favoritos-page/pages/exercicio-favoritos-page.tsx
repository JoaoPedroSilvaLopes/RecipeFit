import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Header,
  HeaderProps,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import { ExercicioFavoritoCard, RemoveExercicioModal } from '../components';
import { SectionList } from 'react-native';
import { useModal } from '@nx-workspace//shared/core';

import firestore from '@react-native-firebase/firestore';

import * as S from './exercicio-favoritos-page.styles';
import { useEffect, useState } from 'react';
import { Receita } from '@nx-workspace//shared/domain-types';

const ExerciciosHomePage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const headerConfigs: HeaderProps = {
    title: 'Exercícios Favoritos',
  };

  const returnPage = () => {
    navigation.goBack();
  };

  const data = [
    {
      title: 'Cyan',
      data: [
        'cyan.100',
        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
        'cyan.100',
        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
        'cyan.100',
        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
        'cyan.100',
        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
        'cyan.100',
        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
      ],
    },
  ];

  // const teste = () => {
  //   firestore()
  //     .collection('usuario')
  //     .onSnapshot((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as Receita[];
  //       console.log(data)
  //     });
  // };

  // const add = () => {
  //   firestore().collection('receita').add({
  //     foto: 'fototeste',
  //     nome: 'aaa',
  //     categoria: 'teste',
  //     ingredientes: ['aaaa\naaaa', 'aaaa'],
  //     modoDePreparo: ['aaa', 'bbbb']
  //   })
  // }

  const [isModalOpen, OpenModal, closeModal] = useModal();

  const handleModal = () => {
    OpenModal();
  };

  return (
    <>
      <S.Screen>
        <Particles />
        <Header {...headerConfigs} />
        <S.Container>
          <SectionList
            contentContainerStyle={{ padding: 20 }}
            sections={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <ExercicioFavoritoCard title={item} onPress={() => handleModal()} />
            )}
          />
        </S.Container>
        <TextButton title="Retornar" onPress={() => returnPage()} />
      </S.Screen>
      <RemoveExercicioModal
        id={0}
        nome={'teste'}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ExerciciosHomePage;
