import { ReceitaFormInput } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  data: ReceitaFormInput;
};

export const add = async ({ data }: Props) => {
  await firestore()
    .collection('receita')
    .add({
      foto: data.foto ? data.foto : '',
      nome: data.nome,
      ingredientes: data.ingredientes,
      modoDePreparo: data.modoDePreparo,
      categoriaId: data.categoriaId,
    });
};
