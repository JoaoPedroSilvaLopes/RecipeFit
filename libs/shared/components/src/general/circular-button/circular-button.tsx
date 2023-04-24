import { FotoService } from '@nx-workspace//shared/services';
import { CircularButtonProps } from '../..';

import * as S from './circular-button.styles';
import { useState } from 'react';

const CircularButton: React.FC<CircularButtonProps> = ({
  title,
  rightImageUrl,
  leftImageUrl,
  backgroundImageUrl,
  ...rest
}) => {
  const [rightImage, setRightImage] = useState<string>('');
  const [isLoading, setIsloading] = useState<boolean>(false);

  FotoService.load({
    imageUrl: rightImageUrl,
    setIsloading: setIsloading,
    setUrl: setRightImage,
  });

  return (
    <S.Container>
      <S.CircularButton shadow={3} {...rest}>
        {/* {backgroundImageUrl && (
          <S.ImageBackground source={backgroundImageUrl} />
        )} */}
        {rightImageUrl && <S.RightImage style={{width: 380, height: 340} } source={{uri: rightImage}} />}
        {/* {leftImageUrl && <S.LeftImage source={leftImageUrl} />} */}
      </S.CircularButton>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default CircularButton;
