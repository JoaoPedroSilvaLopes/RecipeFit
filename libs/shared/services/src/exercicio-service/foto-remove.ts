import storage from '@react-native-firebase/storage';

type Props = {
  id?: string;
  imageUrl?: string;
};

export const removeFoto = async ({ id, imageUrl }: Props) => {
  return await storage().ref(`/exercicios/${id}.png`).delete();
};
