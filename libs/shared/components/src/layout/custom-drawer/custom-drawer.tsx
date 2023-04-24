import auth from '@react-native-firebase/auth';
import {
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { TextButton } from '../../general';
import * as S from './custom-drawer.styles';
import { useCurrentAccount } from '@nx-workspace//shared/core';
import { UsuarioService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';
import { Usuario } from '@nx-workspace//shared/domain-types';

type Props = DrawerContentComponentProps;

const Drawer: React.FC<Props> = ({ ...rest }) => {
  const [userData, setUserData] = useState<Usuario>()
  const signOut = () => {
    auth().signOut();
  };

  const account = useCurrentAccount()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    account?.uid && (await UsuarioService.loadById({ id: account?.uid, setData: setUserData }));
  };

  return (
    <S.DrawerContentScroll {...rest} >
      <S.Container>
        <S.UserContainer>
          <S.UsuarioPicture />
          <S.Title>{userData?.nome}</S.Title>
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
