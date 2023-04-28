import React from 'react';
import { Receita } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  setData: React.Dispatch<React.SetStateAction<Receita | undefined>>;
};

export const loadById = async ({ id, setData }: Props) => {
  return firestore()
    .collection('receita')
    .doc(id)
    .onSnapshot((querySnapshot) => {
      const data = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      } as Receita;
      setData(data);
    });
};
