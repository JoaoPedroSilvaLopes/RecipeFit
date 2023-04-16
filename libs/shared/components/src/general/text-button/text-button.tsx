import { ButtonProps } from '../..';
import { TouchableOpacity } from 'react-native';

import * as S from './text-button.styles';

const TextButton: React.FC<ButtonProps> = ({ title, styles, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <S.Label>{title}</S.Label>
    </TouchableOpacity>
  );
};

export default TextButton;
