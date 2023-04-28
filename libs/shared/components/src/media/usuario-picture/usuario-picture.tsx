import { ImageUtils } from '@nx-workspace//shared/core';
import * as S from './usuario-picture.styles';

type Props = {
  imageUrl?: string;
  readOnly?: boolean;
  onImageUrlChange: (image: string | undefined) => void;
};

const UsuarioPicture: React.FC<Props> = ({
  imageUrl,
  onImageUrlChange,
  readOnly,
}) => {
  return (
    <S.Container>
      <S.AvatarContainer
        shadow={3}
        isDisabled={readOnly}
        _disabled={{ opacity: 1 }}
        onPress={() => ImageUtils.handleImage(onImageUrlChange)}
      >
        {imageUrl ? (
          <S.ImageBackground source={{ uri: imageUrl }} />
        ) : (
          <S.IconPerfil name="user-circle-o" size={150} />
        )}
      </S.AvatarContainer>
    </S.Container>
  );
};

export default UsuarioPicture;
