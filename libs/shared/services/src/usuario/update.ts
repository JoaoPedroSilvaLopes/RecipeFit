import auth from '@react-native-firebase/auth';
import { UsuarioFormInput } from '@nx-workspace//shared/domain-types';
import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  data: UsuarioFormInput;
};

export const update = async ({ id, data }: Props) => {
  const user = auth().currentUser

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

  console.log('teste', user)

  return auth()
    .signInWithEmailAndPassword(
      data.email,
      'correcthorsebatterystaple'
    )
    .then((userCredential) => {
      userCredential.user.updateEmail(data.email);
      onSuccess(data)
    }).catch((e) => console.log(e));
};
