import { CircularButtonProps } from '../..';

import * as S from './circular-image-button.styles';

const CircularImageButton: React.FC<CircularButtonProps> = ({
  title,
  backgroundImageUrl,
  leftImageUrl,
  rightImageUrl,
  onPress,
}) => {
  return (
    <S.Container>
      <S.CircularButton onPress={onPress}>
        {backgroundImageUrl && (
          <S.ImageBackground source={{ uri: backgroundImageUrl }} />
        )}
        <S.ImagesContainer>
          {leftImageUrl && <S.LeftImage source={{ uri: leftImageUrl }} />}
          {rightImageUrl && <S.RightImage source={{ uri: rightImageUrl }} />}
        </S.ImagesContainer>
      </S.CircularButton>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default CircularImageButton;
