import {ButtonProps} from '@recipefit/components';
import {Text, TouchableOpacity} from 'react-native';

import * as S from './text-button.styles';

const TextButton: React.FC<ButtonProps> = ({title, styles, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={[S.styles.footerText, styles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
