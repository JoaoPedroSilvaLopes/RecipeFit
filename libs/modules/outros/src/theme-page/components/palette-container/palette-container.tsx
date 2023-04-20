import { getPaletteColors, usePalette } from '@nx-workspace//shared/core';
import { GradientCircleButton } from '@nx-workspace//shared/components';
import * as S from './palette-container.styles';

const PaletteContainer: React.FC = () => {
  const { palette, togglePalette } = usePalette();

  return (
    <S.Container>
      <S.Title>Escolha a paleta de cores</S.Title>
      <S.CircleButtonGroup>
        <GradientCircleButton
          colors={getPaletteColors('blue')}
          onPress={() => togglePalette()}
          disabled={palette === 'blue' ? true : false}
        />
        <GradientCircleButton
          colors={getPaletteColors('orange')}
          onPress={() => togglePalette()}
          disabled={palette === 'orange' ? true : false}
        />
        <GradientCircleButton
          colors={getPaletteColors('green')}
          onPress={() => togglePalette()}
          disabled={palette === 'green' ? true : false}
        />
      </S.CircleButtonGroup>
    </S.Container>
  );
};

export default PaletteContainer;
