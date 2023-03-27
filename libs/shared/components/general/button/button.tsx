import {ButtonProps} from '@recipefit/components';
import {Text, TouchableOpacity} from 'react-native';

import * as S from './button.styles';

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={S.styles.button} {...rest}>
      <Text style={S.styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
