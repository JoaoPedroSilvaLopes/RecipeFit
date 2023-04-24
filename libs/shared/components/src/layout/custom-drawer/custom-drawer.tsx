import auth from '@react-native-firebase/auth';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContent,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { TextButton } from '../../general';
import * as S from './custom-drawer.styles';

type Props = DrawerContentComponentProps;

const Drawer: React.FC<Props> = ({ ...rest }) => {
  const signOut = () => {
    auth().signOut();
  };

  return (
    <S.DrawerContentScroll {...rest} >
      <S.Container>
        <S.UserContainer>
          <S.UsuarioPicture />
          <S.Title>João</S.Title>
        </S.UserContainer>
        <S.ContentContainer>
          <S.DrawerItemList {...rest} />
        </S.ContentContainer>
        <TextButton title="Sair" onPress={() => signOut()} />
      </S.Container>
    </S.DrawerContentScroll>
  );
};

export default Drawer;
