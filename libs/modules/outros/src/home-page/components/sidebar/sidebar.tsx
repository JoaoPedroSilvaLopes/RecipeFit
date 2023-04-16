import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomePage} from '../../pages';

type sidebarProps = {};
const Drawer = createDrawerNavigator();

const Sidebar: React.FC<sidebarProps> = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen key="home" name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
};

export default Sidebar;
