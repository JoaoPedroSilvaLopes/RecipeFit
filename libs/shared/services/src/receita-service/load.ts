import { Receita } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  setData: React.Dispatch<React.SetStateAction<Receita[]>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const load = async ({ setData, setIsloading }: Props) => {
  return firestore()
    .collection('receita')
    .orderBy('categoriaId')
    .limit(10)
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }) as Receita[];
      setData(data);
      setIsloading(false);
    });
};
