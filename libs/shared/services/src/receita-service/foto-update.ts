import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

type Props = {
  id?: string;
  imageUrl?: string;
};

export const updateFoto = async ({ id, imageUrl }: Props) => {
  const onSuccess = async () => {
    await storage()
      .ref(`/receitas/${id}.png`)
      .getDownloadURL()
      .then((url) => {
        firestore().collection('receita').doc(id).update({
          foto: url,
        });
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
  };

  if (imageUrl && id) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    return await storage()
      .ref('/receitas/')
      .child(`${id}.png`)
      .put(blob)
      .then(() => onSuccess())
      .catch((e) => console.log(e));
  }
};
