import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from '../../pages';

const Sidebar: React.FC = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen key="home" name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
};

export default Sidebar;
