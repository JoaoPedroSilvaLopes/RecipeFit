import { GradientButtonProps } from '../../types';
import * as S from './gradient-circle-button.styles';

const GradientCircleButton: React.FC<GradientButtonProps> = ({
  colors,
  onPress,
  disabled,
}) => {
  return (
    <S.CircleButton
      onPress={onPress}
      disabled={disabled}
      _pressed={{ opacity: 0.75 }}
    >
      <S.CircleContent
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </S.CircleButton>
  );
};

export default GradientCircleButton;
