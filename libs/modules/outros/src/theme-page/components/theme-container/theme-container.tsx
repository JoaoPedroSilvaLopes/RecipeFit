import { GradientCircleButton } from '@nx-workspace//shared/components';
import { getThemeColors, useTheme } from '@nx-workspace//shared/core';
import * as S from './theme-container.styles';

const ThemeContainer: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <S.Container>
      <S.Title>Escolha o tema</S.Title>
      <S.CircleButtonGroup>
        <GradientCircleButton
          colors={getThemeColors('dark')}
          onPress={() => toggleTheme()}
          disabled={mode === 'dark' ? true : false}
        />
        <GradientCircleButton
          colors={getThemeColors('light')}
          onPress={() => toggleTheme()}
          disabled={mode === 'light' ? true : false}
        />
      </S.CircleButtonGroup>
    </S.Container>
  );
};

export default ThemeContainer;
