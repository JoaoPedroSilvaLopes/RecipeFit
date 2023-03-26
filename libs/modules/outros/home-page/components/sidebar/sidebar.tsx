import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {
  StyleSheet,
} from 'react-native'
import DashboardPage from '../../../dashboard/dashboard-page'

type sidebarProps = {

}
const Drawer = createDrawerNavigator()

const Sidebar: React.FC<sidebarProps> = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          key='teste'
          name='teste'
          component={DashboardPage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButton: {
    width: 200,
    height: 200,
    backgroundColor: '#EDEDED',
    borderWidth: 12,
    borderRadius: 150,
    borderColor: '#fff',
    alignItems: 'flex-end',
    marginBottom: 10,

    flexDirection: "row",
    justifyContent: 'center',
    gap: 15,
    elevation: 8,
  },
  title: {
    color: '#005D8C',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Gothic A1',
  },
  rightImage: {
    width: 126,
    height: 126,
    marginVertical: -25,
    transform: [{
      rotate: '350deg',
    }],
  },
  leftImage: {
    width: 126,
    height: 126,
    marginVertical: -25,
    transform: [{
      rotate: '10deg'
    }],
  }
})

export default Sidebar
