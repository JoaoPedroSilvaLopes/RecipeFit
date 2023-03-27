import {TextInput} from 'react-native';
import {TextFieldInputProps} from '../../types';
import {useState} from 'react';
import * as S from './text-field-input.styles';

const TextFieldInput: React.FC<TextFieldInputProps> = ({...rest}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <TextInput
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      {...rest}
      placeholderTextColor={active ? '#80C8FF' : '#ffffff'}
      style={active ? S.styles.inputPressed : S.styles.input}
    />
  );
};

export default TextFieldInput;
