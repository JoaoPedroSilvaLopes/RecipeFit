import { ExercicioFormInput } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  data: ExercicioFormInput;
};

export const add = async ({ data }: Props) => {
  return firestore()
    .collection('exercicio')
    .add({
      foto: data.foto ? data.foto : '',
      nome: data.nome,
      categoriaId: data.categoriaId,
    });
};
