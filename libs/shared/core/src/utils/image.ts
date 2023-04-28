import { Alert } from 'react-native';
import { ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import * as ImagePikcer from 'react-native-image-picker';

export const handleImage = (
  onImageUrlChange: (image: string | undefined) => void
) => {
  Alert.alert(
    'Selecione',
    'Informe o local de onde você quer pegar a foto',
    [
      {
        text: 'Galeria',
        onPress: () => PickImageFromGalery(onImageUrlChange),
        style: 'default',
      },
      {
        text: 'Camera',
        onPress: () => PickImageFromCamera(onImageUrlChange),
        style: 'default',
      },
    ],
    {
      cancelable: true,
    }
  );
};

const PickImageFromGalery = async (
  onImageUrlChange: (image: string | undefined) => void
) => {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
  };

  const result = await ImagePikcer.launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      return console.log('User cancelled image picker');
    } else if (response.errorCode) {
      return console.log('ImagePicker ErrorCode: ', response.errorCode);
    } else if (response.errorMessage) {
      return console.log('ImagePicker ErrorMessage: ', response.errorMessage);
    } else {
      const source = response?.assets && response?.assets[0].uri;
      onImageUrlChange(source);
      return response?.assets && response?.assets[0].uri;
    }
  });

  return result;
};

const PickImageFromCamera = async (
  onImageUrlChange: (image: string | undefined) => void
) => {
  const options: CameraOptions = {
    mediaType: 'photo',
    saveToPhotos: false,
    cameraType: 'front',
    quality: 1,
  };

  const result = await ImagePikcer.launchCamera(options, (response) => {
    if (response.didCancel) {
      return console.log('User cancelled image picker');
    } else if (response.errorCode) {
      return console.log('ImagePicker ErrorCode: ', response.errorCode);
    } else if (response.errorMessage) {
      return console.log('ImagePicker ErrorMessage: ', response.errorMessage);
    } else {
      const source = response?.assets && response?.assets[0].uri;
      onImageUrlChange(source);
      return response?.assets && response?.assets[0].uri;
    }
  });

  return result;
};
