import { ExercicioCategoria } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  setData: React.Dispatch<
    React.SetStateAction<ExercicioCategoria[] | undefined>
  >;
};

export const load = async ({ setData }: Props) =>
  firestore()
    .collection('categoriaExercicio')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }) as ExercicioCategoria[];
      setData(data);
    });
