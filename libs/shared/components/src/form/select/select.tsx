import { SelectProps } from '../..';
import { useState } from 'react';
import * as S from './select.styles';

const TextFieldInput: React.FC<SelectProps> = ({
  placeholder,
  isRequired,
  isReadOnly,
  label,
  error,
  data,
  ...rest
}) => {
  const [active, setActive] = useState<boolean>(false);

  const changeActiveState = () => {
    setActive(!active)
  }

  return (
    <S.Container>
      <S.LabelGroup>
        <S.Label>{label}</S.Label>
        {isRequired && <S.IsRequired>*</S.IsRequired>}
      </S.LabelGroup>
      <S.Select
        placeholder={placeholder}
        isDisabled={isReadOnly}
        active={active}
        error={error}
        onOpen={() => changeActiveState()}
        onClose={() => changeActiveState()}
        variant={'unstyled'}
        shadow={3}
        {...rest}
      >
        {data && data.map((value) => {
          return <S.Item label={value.label} value={value.value} />;
        })}
      </S.Select>
      {error && <S.LabelError>{error}</S.LabelError>}
    </S.Container>
  );
};

export default TextFieldInput;
