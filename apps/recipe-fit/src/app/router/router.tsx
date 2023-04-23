import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CadastroPage,
  LoginPage,
  RecuperarSenhaPage,
} from '@nx-workspace//modules/authentication';
import { HomePage, PerfilPage, ThemePage } from '@nx-workspace//modules/outros';
import {
  ExerciciosCategoriaPage,
  ExerciciosFavoritosPage,
  ExerciciosHomePage,
} from '@nx-workspace//modules/exercicio';
import { useCurrentAccount } from '../adapters';
import { AdministracaoExercicioPage } from '@nx-workspace//modules/administracao';

export const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const user = useCurrentAccount();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Screen name="Home" component={HomePage} />
        ) : (
          <Stack.Screen name="Login" component={LoginPage} />
        )}
        <Stack.Screen name="Cadastro" component={CadastroPage} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaPage} />
        <Stack.Screen name="Perfil" component={PerfilPage} />
        <Stack.Screen name="Theme" component={ThemePage} />
        <Stack.Screen name="ExercicioHome" component={ExerciciosHomePage} />
        <Stack.Screen
          name="ExercicioCategoria"
          component={ExerciciosCategoriaPage}
        />
        <Stack.Screen
          name="ExercicioFavoritos"
          component={ExerciciosFavoritosPage}
        />

        <Stack.Screen
          name="AdministracaoExercicio"
          component={AdministracaoExercicioPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
