import { TextButtonProps } from '../..';

import * as S from './text-button.styles';

const TextButton: React.FC<TextButtonProps> = ({ title, ...rest }) => {
  return (
    <S.TextButton variant={'outline'} _pressed={{ opacity: 0.75 }} {...rest} >
      <S.Label>{title}</S.Label>
    </S.TextButton>
  );
};

export default TextButton;
