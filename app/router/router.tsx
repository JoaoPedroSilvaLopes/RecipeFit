
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../../libs/modules/outros';

export const Router: React.FC = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={HomePage} />
        {/* <Stack.Screen name='Dashboard' component={DashboardPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};
