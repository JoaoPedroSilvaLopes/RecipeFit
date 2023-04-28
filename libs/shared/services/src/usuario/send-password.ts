import auth from '@react-native-firebase/auth';

type Props = {
  email: string;
};

export const sendPassword = async ({ email }: Props) => {
  return auth().sendPasswordResetEmail(email);
};
