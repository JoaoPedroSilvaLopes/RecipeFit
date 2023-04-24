import { ExercicioFormInput } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  data: ExercicioFormInput;
};

export const add = async ({ data }: Props) => {
  return firestore()
    .collection('exercicio')
    .add({
      nome: data.nome,
      categoriaId: firestore()
        .collection('categoriaExercicio')
        .doc(data.categoriaId),
    });
};
