import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UsuarioFormInput } from '@nx-workspace//shared/domain-types';

type Props = {
  id?: string;
  data: UsuarioFormInput;
};

export const update = async ({ id, data }: Props) => {
  const onSuccess = (data: UsuarioFormInput) => {
    firestore().collection('usuario').doc(id).set(
      {
        nome: data.nome,
        email: data.email,
        altura: +data.altura,
        peso: +data.peso,
      },
      { merge: true }
    );
  };

  return auth()
    .currentUser?.updateEmail(data.email)
    .then(() => {
      onSuccess(data);
    })
    .catch((e) => console.log(e));
};
