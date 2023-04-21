import { TextButtonProps } from '../..';

import * as S from './text-button.styles';

const TextButton: React.FC<TextButtonProps> = ({
  title,
  isLoading,
  ...rest
}) => {
  return (
      <S.TextButton
        isLoadingText={title}
        isLoading={isLoading}
        spinnerPlacement="end"
        variant={'outline'}
        _pressed={{ opacity: 0.75 }}
        {...rest}
      >
        <S.Label>{title}</S.Label>
      </S.TextButton>
  );
};

export default TextButton;
