import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
};

export const remove = async ({ id }: Props) => {
  return firestore().collection('exercicio').doc(id).delete();
};
