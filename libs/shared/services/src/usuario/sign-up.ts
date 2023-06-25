import { CadastroFormInput } from '@nx-workspace//shared/domain-types';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type Props = {
  data: CadastroFormInput;
};

export const signUp = async ({ data }: Props) => {
  const onSuccess = (data: CadastroFormInput) => {
    firestore().collection('usuario').doc(auth().currentUser?.uid).set({
      nome: data.nome,
      email: data.email,
      peso: data.peso,
      altura: data.altura,
    });
  };

  return auth()
    .createUserWithEmailAndPassword(data.email, data.senha)
    .then(() => onSuccess(data));
};
