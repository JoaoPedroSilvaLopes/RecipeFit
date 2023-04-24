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
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      }) as Exercicio[];
      const filterData = data.filter((value) => {
        return value.id === id && value;
      });
      setData(filterData[0]);
    });
};
