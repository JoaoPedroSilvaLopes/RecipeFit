import auth from '@react-native-firebase/auth';

type Props = {
  email: string;
  senha: string;
};

export const signIn = async ({ email, senha }: Props) => {
  return auth().signInWithEmailAndPassword(email, senha);
};
