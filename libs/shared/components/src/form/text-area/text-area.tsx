import { TextAreaProps } from '../..';
import { useState } from 'react';
import * as S from './text-area.styles';

const TextFieldInput: React.FC<TextAreaProps> = ({
  placeholder,
  isRequired,
  isReadOnly,
  label,
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
      <S.TextArea
        placeholder={placeholder}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        active={active}
        error={error}
        onFocus={() => setActive(!active)}
        onBlur={() => setActive(!active)}
        variant={'unstyled'}
        shadow={3}
        {...rest}
      />
      {error && <S.LabelError>{error}</S.LabelError>}
    </S.Container>
  );
};

export default TextFieldInput;
