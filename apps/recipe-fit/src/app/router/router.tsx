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
import { useCurrentAccount } from '@nx-workspace//shared/core';
import {
  AdministracaoExercicioPage,
  AdministracaoReceitaPage,
} from '@nx-workspace//modules/administracao';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '@nx-workspace//shared/components';
import { drawerMenus } from '../configs';

export const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const user = useCurrentAccount();

  const DrawerHome = () => (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => (
        <CustomDrawer DrawerItems={drawerMenus} {...props} />
      )}
    >
      <Drawer.Screen key="Home" name="Pagina Inicial" component={HomePage} />
      <Drawer.Screen name="Perfil" component={PerfilPage} />
      <Drawer.Screen name="Theme" component={ThemePage} />
      <Drawer.Screen
        name="AdministracaoExercicio"
        component={AdministracaoExercicioPage}
      />
      <Drawer.Screen
        name="AdministracaoReceita"
        component={AdministracaoReceitaPage}
      />
    </Drawer.Navigator>
  );

  const ExercicioNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExercicioHome" component={ExerciciosHomePage} />
      <Stack.Screen
        name="ExercicioCategoria"
        component={ExerciciosCategoriaPage}
      />
      <Stack.Screen
        name="ExercicioFavoritos"
        component={ExerciciosFavoritosPage}
      />
    </Stack.Navigator>
  );

  const AutenticaçãoNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Cadastro" component={CadastroPage} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaPage} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <>
            <Stack.Screen name="HomeScreen" component={DrawerHome} />
            <Stack.Screen name="ExerciciosScreen" component={ExercicioNavigator} />
          </>
        ) : (
          <Stack.Screen name="AutenticationScreen" component={AutenticaçãoNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
