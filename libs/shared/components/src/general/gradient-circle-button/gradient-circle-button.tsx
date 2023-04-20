import { GradientButtonProps } from '../../types';
import * as S from './gradient-circle-button.styles';

const GradientCircleButton: React.FC<GradientButtonProps> = ({
  onPress,
  disabled,
  color,
  ...rest
}) => {
  return (
    <S.CircleButton
      onPress={onPress}
      disabled={disabled}
      shadow={3}
      color={color}
      {...rest}
    />
  );
};

export default GradientCircleButton;
