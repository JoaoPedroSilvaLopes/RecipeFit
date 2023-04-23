import { Router } from './router/router';
import { NativeBaseProvider } from 'native-base';
import { PaletteProvider, ThemeProvider } from '@nx-workspace//shared/core';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider defaultMode="light">
        <PaletteProvider defaultPalette="blue">
          <Router />
        </PaletteProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;
