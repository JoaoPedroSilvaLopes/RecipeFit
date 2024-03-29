import { ExercicioFormInput } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  data: ExercicioFormInput;
};

export const update = async ({ id, data }: Props) => {
  return firestore().collection('exercicio').doc(id).set(
    {
      nome: data.nome,
      categoriaId: data.categoriaId,
    },
    { merge: true }
  );
};
