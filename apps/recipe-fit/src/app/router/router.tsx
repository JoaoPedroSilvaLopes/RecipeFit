import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {useEffect, useState} from 'react';

import {
  CadastroPage,
  LoginPage,
  RecuperarSenhaPage,
} from '@nx-workspace//modules/authentication';
import { HomePage } from '@nx-workspace//modules/outros';
import { ThemeProvider } from '@nx-workspace//shared/core';

export const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider defaultTheme="dark">
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Cadastro" component={CadastroPage} />
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
