import { StylesUtils, useTheme } from '@nx-workspace//shared/core';
import { GradientCircleButton } from '@nx-workspace//shared/components';

import * as S from './palette-container.styles';

const PaletteContainer: React.FC = () => {
  const { palette, togglePalette } = useTheme();

  return (
    <S.Container>
      <S.Title>Escolha a paleta de cores</S.Title>
      <S.CircleButtonGroup>
        <GradientCircleButton
          colors={StylesUtils.getPaletteColors('blue')}
          onPress={() => togglePalette('blue')}
          disabled={palette === 'blue' ? true : false}
        />
        <GradientCircleButton
          colors={StylesUtils.getPaletteColors('orange')}
          onPress={() => togglePalette('orange')}
          disabled={palette === 'orange' ? true : false}
        />
        <GradientCircleButton
          colors={StylesUtils.getPaletteColors('green')}
          onPress={() => togglePalette('green')}
          disabled={palette === 'green' ? true : false}
        />
      </S.CircleButtonGroup>
    </S.Container>
  );
};

export default PaletteContainer;
