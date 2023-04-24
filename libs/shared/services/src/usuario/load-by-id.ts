import React from 'react'
import { Usuario } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  setData: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const loadById = async ({ id, setData, setIsloading }: Props) => {
  return firestore()
    .collection('usuario')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      }) as Usuario[];
      const filterData = data.filter((value) => {
        return value.id === id && value
      })

      setData(filterData[0]);
      setIsloading(false);
    });
};
