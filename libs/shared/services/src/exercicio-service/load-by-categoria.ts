import { Exercicio } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id: string;
  setData: React.Dispatch<React.SetStateAction<Exercicio[]>>;
};

export const loadByCategoria = async ({ id, setData }: Props) => {
  return firestore()
    .collection('exercicio')
    .where('categoriaId', '==', id)
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      }) as Exercicio[];
      setData(data)
    });
};
