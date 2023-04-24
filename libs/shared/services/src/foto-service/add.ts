import storage from '@react-native-firebase/storage';

type Props = {
  nome: string
  imageUri?: string;
};

export const add = async ({ imageUri, nome }: Props) => {
  if (imageUri) {
    console.log(imageUri)
    const response = await fetch(imageUri);
    const blob = await response.blob();

    const firebase = storage().ref().child(nome).put(blob);

    try {
      await firebase;
    } catch (e) {
      console.log('deu certo nao');
    }
  }
};
