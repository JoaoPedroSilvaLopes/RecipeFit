import {Text, TextInput, View} from 'react-native';
import {TextFieldInputProps} from '../../types';
import {useState} from 'react';
import * as S from './text-field-input.styles';

const TextFieldInput: React.FC<TextFieldInputProps> = ({
  label,
  isRequired,
  error,
  ...rest
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <View style={S.styles.container}>
      <View style={S.styles.titleLabelGroup}>
        <Text style={S.styles.label}>{label}</Text>
        {isRequired && <Text style={S.styles.isRequired}>*</Text>}
      </View>
      <TextInput
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholderTextColor={'#ffffff'}
        style={[
          S.styles.baseInput,
          error ? S.styles.inputError : active && S.styles.inputPressed,
        ]}
        {...rest}
      />
      {error && <Text style={S.styles.error}>{error}</Text>}
    </View>
  );
};

export default TextFieldInput;
