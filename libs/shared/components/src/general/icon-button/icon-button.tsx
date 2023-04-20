import { IconButtonProps } from '../../types';

import * as S from './icon-button.styles';

const IconButton: React.FC<IconButtonProps> = ({ icon, ...rest }) => {
  return (
    <S.IconButtonWrapper
      icon={icon}
      shadow={3}
      _pressed={{ opacity: 0.75 }}
      {...rest}
    />
  );
};

export default IconButton;
