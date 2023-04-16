import { TextFieldInputProps } from '../..';
import { useState } from 'react';
import * as S from './text-field-input.styles';

const TextFieldInput: React.FC<TextFieldInputProps> = ({
  label,
  isRequired,
  error,
  ...rest
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Label isRequired={isRequired}>{label}</S.Label>
      <S.BaseInput
        active={active}
        error={error}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...rest}
      />
      {error && <S.LabelError>{error}</S.LabelError>}
    </S.Container>
  );
};

export default TextFieldInput;
