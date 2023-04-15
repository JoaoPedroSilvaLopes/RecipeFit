import {TextFieldInputProps} from '../../types';
import TextFieldInput from '../text-field-input/text-field-input';

const NumberFieldInput: React.FC<TextFieldInputProps> = ({mask, ...rest}) => {
  return <TextFieldInput keyboardType="numeric" mask={mask} {...rest} />;
};

export default NumberFieldInput;
