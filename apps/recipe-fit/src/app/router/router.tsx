import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
//import {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CadastroPage,
  LoginPage,
  RecuperarSenhaPage,
} from '@nx-workspace//modules/authentication';
import { HomePage, PerfilPage, ThemePage } from '@nx-workspace//modules/outros';
import { PaletteProvider, ThemeProvider } from '@nx-workspace//shared/core';
import { NativeBaseProvider } from 'native-base';

export const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <ThemeProvider defaultMode="light">
        <PaletteProvider defaultPalette="blue">
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              {/* <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Cadastro" component={CadastroPage} />
              <Stack.Screen
                name="RecuperarSenha"
                component={RecuperarSenhaPage}
              /> */}
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Perfil" component={PerfilPage} />
              <Stack.Screen name="Theme" component={ThemePage} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaletteProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};
