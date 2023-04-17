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
      <S.LabelGroup>
        <S.Label>{label}</S.Label>
        {isRequired && <S.IsRequired>*</S.IsRequired>}
      </S.LabelGroup>
      <S.BaseInput
        active={active}
        error={error}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      {error && <S.LabelError>{error}</S.LabelError>}
    </S.Container>
  );
};

export default TextFieldInput;
