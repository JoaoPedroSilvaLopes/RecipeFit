import firestore from '@react-native-firebase/firestore';

type Props = {
  id?: string;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const remove = async ({ id, setIsloading }: Props) => {
  return firestore()
    .collection('exercicio')
    .doc(id)
    .delete()
    .then(() => setIsloading(false))
    .catch(() => setIsloading(false))
    .finally(() => setIsloading(false));
};
