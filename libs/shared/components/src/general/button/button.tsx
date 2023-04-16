import { ButtonProps } from '../../types';
import { ActivityIndicator } from 'react-native';

import * as S from './button.styles';

const Button: React.FC<ButtonProps> = ({
  isLoading,
  disabled,
  title,
  ...rest
}) => {
  return (
    <S.Button {...rest}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#fff'} />
      ) : (
        <S.Label>{title}</S.Label>
      )}
    </S.Button>
  );
};

export default Button;
