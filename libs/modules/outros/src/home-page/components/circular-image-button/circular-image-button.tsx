import { CircularButtonProps } from '@nx-workspace//shared/components';
import * as S from './circular-image-button.styles';

export type CircularImageButtonProps = {
  rightImageUrl?: string;
  leftImageUrl?: string;
} & CircularButtonProps;

const CircularButton: React.FC<CircularImageButtonProps> = ({
  title,
  rightImageUrl,
  leftImageUrl,
  backgroundImageUrl,
  ...rest
}) => {
  console.log('teste.......', rightImageUrl);

  return (
    <>
      <S.CircularButton
        title={title}
        backgroundImageUrl="https://images.pexels.com/photos/34950/pexels-photo.jpg"
        children={<S.RightImage
            source={{
              uri: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
            }}
          />
          }
        {...rest}
      ></S.CircularButton>
      {/* {rightImageUrl && (
        <S.RightImage
          source={{
            uri: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
          }}
        />
      )}
      {leftImageUrl && (
        <S.LeftImage
          source={{
            uri: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
          }}
        />
      )} */}
    </>
  );
};

export default CircularButton;
