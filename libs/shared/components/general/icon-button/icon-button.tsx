import {IconButtonProps} from '@recipefit/components';
import {TouchableOpacity} from 'react-native';

import * as S from './icon-button.styles';

const IconButton: React.FC<IconButtonProps> = ({icon, ...rest}) => {
  return (
    <TouchableOpacity style={S.styles.iconButton} {...rest}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
