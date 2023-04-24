import { ReceitaFormInput } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  data: ReceitaFormInput;
};

export const update = async ({ id, data }: Props) => {
  return firestore().collection('receita').doc(id).set(
    {
      nome: data.nome,
      ingredientes: data.ingredientes,
      modoDePreparo: data.modoDePreparo,
      categoriaId: data.categoriaId,
    },
    { merge: true }
  );
};
