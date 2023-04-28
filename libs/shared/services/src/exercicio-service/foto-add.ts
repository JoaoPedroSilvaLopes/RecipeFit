import storage from '@react-native-firebase/storage';

type Props = {
  nome: string
  imageUri?: string;
};

export const addFoto = async ({ imageUri, nome }: Props) => {
  if (imageUri) {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const firebase = storage().ref('/exercicios/').child(`${nome}.png`).put(blob);

    try {
      await firebase;
    } catch (e) {
      console.log(e);
    }
  }
};
