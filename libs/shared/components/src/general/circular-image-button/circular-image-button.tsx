import { CircularButtonProps } from '../..';

import * as S from './circular-image-button.styles';

const CircularImageButton: React.FC<CircularButtonProps> = ({
  title,
  backgroundImageUrl,
  onPress,
}) => {
  return (
    <S.Container>
      <S.CircularButton onPress={onPress}>
        {backgroundImageUrl && (
          <S.ImageBackground source={{ uri: backgroundImageUrl }} />
        )}
      </S.CircularButton>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default CircularImageButton;
