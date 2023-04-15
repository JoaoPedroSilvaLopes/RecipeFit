//import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '../../libs/modules/outros';
import {CadastroPage, LoginPage} from '../../libs/modules/authentication';
//import {useEffect, useState} from 'react';

export const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // useEffect(() => {
  //   const authListener = auth().onAuthStateChanged(authUser => {
  //     setUser(authUser);
  //   });

  //   return authListener;
  // }, []);

  return (
    <NavigationContainer>
      {/* {user ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Cadastro" component={CadastroPage} />
        </Stack.Navigator>
      )}
      {user ? ( */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={CadastroPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
