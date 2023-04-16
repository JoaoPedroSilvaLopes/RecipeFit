import { IconButtonProps } from '../..';

import * as S from './icon-button.styles';

const IconButton: React.FC<IconButtonProps> = ({icon, ...rest}) => {
  return (
    <S.IconButton {...rest}>
      {icon}
    </S.IconButton>
  );
};

export default IconButton;
