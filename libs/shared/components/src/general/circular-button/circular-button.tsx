import { CircularButtonProps } from '../..';

import * as S from './circular-button.styles';

const CircularButton: React.FC<CircularButtonProps> = ({
  title,
  rightImageUrl,
  leftImageUrl,
  backgroundImageUrl,
  ...rest
}) => {
  return (
    <S.Container>
      <S.CircularButton shadow={3} {...rest}>
        {backgroundImageUrl && (
          <S.ImageBackground source={backgroundImageUrl} />
        )}
        {rightImageUrl && <S.RightImage source={rightImageUrl} />}
        {leftImageUrl && <S.LeftImage source={leftImageUrl} />}
      </S.CircularButton>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default CircularButton;
