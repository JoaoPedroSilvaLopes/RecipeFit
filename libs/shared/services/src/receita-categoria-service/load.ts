import { ReceitaCategoria } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  setData: React.Dispatch<
    React.SetStateAction<ReceitaCategoria[] | undefined>
  >;
};

export const load = async ({ setData }: Props) =>
  firestore()
    .collection('categoriaReceita')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }) as ReceitaCategoria[];
      setData(data);
    });
