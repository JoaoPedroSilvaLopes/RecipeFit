import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerItemProps } from '../..';

import * as S from './drawer-item.styles';

const DrawerItem: React.FC<DrawerItemProps> = ({ icon, route, title }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <S.DrawerItem
      label={() => (
        <S.Container>
          <S.IconCircle>{icon}</S.IconCircle>
          <S.Label>{title}</S.Label>
        </S.Container>
      )}
      onPress={() => navigation.navigate(route)}
    />
  );
};

export default DrawerItem;
