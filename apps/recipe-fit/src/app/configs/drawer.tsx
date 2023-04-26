import { DrawerItemProps } from '@nx-workspace//shared/components';
import IconPerfil from 'react-native-vector-icons/MaterialIcons';
import IconTheme from 'react-native-vector-icons/MaterialIcons';
import IconExercicio from 'react-native-vector-icons/MaterialIcons';
import IconReceita from 'react-native-vector-icons/MaterialCommunityIcons';

export const drawerMenus: DrawerItemProps[] = [
  {
    title: 'Meu Perfil',
    route: 'Perfil',
    icon: <IconPerfil name="person" size={20} color={'#fff'} />,
  },
  {
    title: 'Temas',
    route: 'Theme',
    icon: <IconTheme name="color-lens" size={20} color={'#fff'} />,
  },
  {
    title: 'Administracao Exercícios',
    route: 'AdministracaoExercicio',
    icon: <IconExercicio name="fitness-center" size={20} color={'#fff'} />,
  },
  {
    title: 'Administracao Receitas',
    route: 'AdministracaoReceita',
    icon: <IconReceita name="food-apple" size={20} color={'#fff'} />,
  },
];
