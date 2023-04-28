import { ImageUtils } from '@nx-workspace//shared/core';

import * as S from './image-picker.styles';

type Props = {
  image?: string;
  onImageChange: (image: string | undefined) => void;
};

const ImagePicker: React.FC<Props> = ({ image, onImageChange }) => {
  return (
    <S.UploadScreen onPress={() => ImageUtils.handleImage(onImageChange)} shadow={3}>
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
