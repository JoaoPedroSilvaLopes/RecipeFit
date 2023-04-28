import { ButtonProps } from '../../types';

import * as S from './button.styles';

const Button: React.FC<ButtonProps> = ({
  isLoading,
  disabled,
  title,
  isLoadingText,
  children,
  ...rest
}) => {
  const isDisable = disabled ? true : false;

  return (
    <S.Button
      isLoading={isLoading}
      isLoadingText={isLoadingText}
      isDisabled={isDisable}
      _pressed={{ opacity: 0.75 }}
      _disabled={{ opacity: 0.8 }}
      shadow={3}
      {...rest}
    >
      {title && <S.Label>{title}</S.Label>}
      {children}
    </S.Button>
  );
};

export default Button;
