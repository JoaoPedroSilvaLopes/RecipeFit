import {ButtonProps} from '@recipefit/components';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';

import * as S from './button.styles';

const Button: React.FC<ButtonProps> = ({
  isLoading,
  disabled,
  title,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[S.styles.button, disabled && S.styles.disabled]}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#fff'} />
      ) : (
        <Text style={S.styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
