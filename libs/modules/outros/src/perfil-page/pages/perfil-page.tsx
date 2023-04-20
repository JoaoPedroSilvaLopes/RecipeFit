import React, { useEffect, useState } from 'react';
import {
  Header,
  HeaderProps,
  IconButton,
  Particles,
  UsuarioPicture,
} from '@nx-workspace//shared/components';
import {
  PerfilFormInput,
  perfilValidationSchema,
} from '@nx-workspace//shared/domain-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { PerfilForm } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './perfil-page.styles';

const PerfilPage: React.FC = () => {
  const form = useForm<PerfilFormInput>({
    resolver: yupResolver(perfilValidationSchema),
    mode: 'onChange',
  });
  const [isRead, setIsRead] = useState<boolean>(true);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    form.clearErrors();
    if (!isRead) {
      form.setValue('nome', '');
      form.setValue('email', '');
      form.setValue('peso', '');
      form.setValue('altura', '');
    } else {
      form.setValue('nome', 'teste');
      form.setValue('email', 'teste5@gmail.com');
      form.setValue('peso', '55');
      form.setValue('altura', '165');
    }
  }, [isRead]);

  const onSubmit: SubmitHandler<PerfilFormInput> = (data) => {
    setIsloading(true);
    // auth()
    //   .signInWithEmailAndPassword(data.email, data.senha)
    //   .then(onSuccess)
    //   .catch(onError);
  };

  const headerConfigs: HeaderProps = {
    title: 'Meu Perfil',
    actions: [
      <IconButton
        icon={
          isRead ? (
            <Icon name="edit" size={15} color={'#ffffff'} />
          ) : (
            <Icon name="edit-off" size={15} color={'#ffffff'} />
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
