import { Alert } from 'react-native';
import { ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import * as ImagePikcer from 'react-native-image-picker';

import * as S from './image-picker.styles';

type Props = {
  image?: string;
  onImageChange: (image: string | undefined) => void;
};

const ImagePicker: React.FC<Props> = ({ image, onImageChange }) => {
  const handleImage = () => {
    Alert.alert(
      'Selecione',
      'Informe o local de onde você quer pegar a foto',
      [
        {
          text: 'Galeria',
          onPress: () => PickImageFromGalery(),
          style: 'default',
        },
        {
          text: 'Camera',
          onPress: () => PickImageFromCamera(),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const PickImageFromGalery = async () => {
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
        onImageChange(source);
        return response?.assets && response?.assets[0].uri;
      }
    });

    return result;
  };

  const PickImageFromCamera = async () => {
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
        onImageChange(source);
        return response?.assets && response?.assets[0].uri;
      }
    });

    return result;
  };

  return (
    <S.UploadScreen onPress={() => handleImage()} shadow={3}>
      {image ? (
        <S.ImageBackground
          source={{ uri: image }}
          imageStyle={{ borderRadius: 10 }}
          resizeMode="cover"
        />
      ) : (
        <S.IconPerfil name="camera" size={80} />
      )}
    </S.UploadScreen>
  );
};

export default ImagePicker;
