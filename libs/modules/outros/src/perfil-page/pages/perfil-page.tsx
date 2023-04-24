import React, { useEffect, useState } from 'react';
import {
  Header,
  HeaderProps,
  IconButton,
  Particles,
  UsuarioPicture,
} from '@nx-workspace//shared/components';
import {
  UsuarioFormInput,
  perfilValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { PerfilForm } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './perfil-page.styles';
import { useCurrentAccount } from '@nx-workspace//shared/core';
import { useLoadById } from '../hooks';
import { UsuarioService } from '@nx-workspace//shared/services';

const PerfilPage: React.FC = () => {
  const form = useForm<UsuarioFormInput>({
    resolver: yupResolver(perfilValidationSchema),
    mode: 'onChange',
  });
  const [isRead, setIsRead] = useState<boolean>(true);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const user = useCurrentAccount();
  const { data: usuario } = useLoadById({ id: user?.uid });

  useEffect(() => {
    form.clearErrors();
    if (isRead && usuario) {
      form.setValue('nome', usuario?.nome);
      form.setValue('email', usuario?.email);
      form.setValue('peso', `${usuario?.peso}`);
      form.setValue('altura', `${usuario?.altura}`);
    } else {
      form.setValue('nome', '');
      form.setValue('email', '');
      form.setValue('peso', '');
      form.setValue('altura', '');
    }
  }, [isRead, usuario]);

  const onSubmit: SubmitHandler<UsuarioFormInput> = (data) => {
    if (usuario) {
      setIsloading(true);
      UsuarioService.update({ id: usuario.id, data: data })
        .then()
        .catch()
        .finally(() => setIsloading(false));
    }
  };

  const headerConfigs: HeaderProps = {
    title: 'Meu Perfil',
    actions: [
      <IconButton
        icon={
          isRead ? (
            <Icon key="edit" name="edit" size={15} color={'#ffffff'} />
          ) : (
            <Icon key="edit-off" name="edit-off" size={15} color={'#ffffff'} />
          )
        }
        onPress={() => setIsRead(!isRead)}
      />,
    ],
  };

  return (
    <S.Screen>
      <Particles />
      <Header {...headerConfigs} />
      <UsuarioPicture />
      <FormProvider {...form}>
        <PerfilForm onSubmit={onSubmit} isLoading={isLoading} isRead={isRead} />
      </FormProvider>
    </S.Screen>
  );
};

export default PerfilPage;
