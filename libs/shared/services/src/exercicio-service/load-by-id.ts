import React from 'react'
import { Exercicio } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  setData: React.Dispatch<React.SetStateAction<Exercicio | undefined>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const loadById = async ({ id, setData, setIsloading }: Props) => {
  return firestore()
    .collection('exercicio')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.filter((doc) => {
        return doc.id === id && { id: doc.id, ...doc.data() };
      }) as unknown as Exercicio[];
      setData(data[0]);
      setIsloading(false);
    });
};
