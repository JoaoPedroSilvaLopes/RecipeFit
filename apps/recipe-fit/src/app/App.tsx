import { Router } from './router/router';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from '@nx-workspace//shared/core';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider defaultMode="light" defaultPalette="blue">
        <Router />
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;
