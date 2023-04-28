import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useCurrentAccount } from '@nx-workspace//shared/core';
import { UsuarioService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';
import { Usuario } from '@nx-workspace//shared/domain-types';
import { DrawerItem, DrawerItemProps } from '../..';

import * as S from './custom-drawer.styles';

type Props = DrawerContentComponentProps & {
  DrawerItems: DrawerItemProps[];
};

const Drawer: React.FC<Props> = ({ DrawerItems, ...rest }) => {
  const [userData, setUserData] = useState<Usuario>();
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const account = useCurrentAccount();

  useEffect(() => {
    const fetchData = async () => {
      account?.uid &&
        (await UsuarioService.loadById({
          id: account?.uid,
          setData: setUserData,
        }));
    };
    fetchData();
  }, [account]);

  useEffect(() => {
    userData && setImageUrl(userData.foto);
  }, [userData]);

  return (
    <S.DrawerContentScroll {...rest}>
      <S.Container>
        <S.UsuarioPicture
          imageUrl={imageUrl}
          readOnly
          onImageUrlChange={setImageUrl}
        />
        <S.Title>{userData?.nome}</S.Title>
        <S.ContainerButtons>
          {DrawerItems.map((drawerItem, index) => {
            return (
              <DrawerItem
                key={index}
                title={drawerItem.title}
                icon={drawerItem.icon}
                route={drawerItem.route}
              />
            );
          })}
        </S.ContainerButtons>
        <S.BotaoSair title="Sair" onPress={() => UsuarioService.signOut()} />
      </S.Container>
    </S.DrawerContentScroll>
  );
};

export default Drawer;
