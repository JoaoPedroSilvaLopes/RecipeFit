import React from 'react';
import { Usuario } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  setData: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
};

export const loadById = async ({ id, setData }: Props) => {
  return firestore()
    .collection('usuario')
    .doc(id)
    .onSnapshot((querySnapshot) => {
      const data = {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      } as Usuario;
      setData(data);
    });
};
