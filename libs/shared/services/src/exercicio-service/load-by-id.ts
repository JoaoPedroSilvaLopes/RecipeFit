import React from 'react';
import { Exercicio } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  setData: React.Dispatch<React.SetStateAction<Exercicio | undefined>>;
};

export const loadById = async ({ id, setData }: Props) => {
  return firestore()
    .collection('exercicio')
    .doc(id)
    .onSnapshot((querySnapshot) => {
      const data = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      } as Exercicio;
      setData(data);
    });
};
