import { Exercicio } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  setData: React.Dispatch<React.SetStateAction<Exercicio[]>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const load = async ({ setData, setIsloading }: Props) => {
  return firestore()
    .collection('exercicio')
    .orderBy('categoriaId')
    .limit(10)
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }) as Exercicio[];
      setData(data);
      setIsloading(false);
    });
};
