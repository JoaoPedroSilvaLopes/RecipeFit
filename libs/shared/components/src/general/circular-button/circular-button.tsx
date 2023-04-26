import { CircularButtonProps } from '../..';

import * as S from './circular-button.styles';

const CircularButton: React.FC<CircularButtonProps> = ({
  title,
  backgroundImageUrl,
  children,
  ...rest
}) => {
  return (
    <S.Container>
      <S.CircularButton shadow={3} {...rest}>
        <S.ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
          }}
          style={{ flex: 1 }}
        />
      </S.CircularButton>
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};

export default CircularButton;
