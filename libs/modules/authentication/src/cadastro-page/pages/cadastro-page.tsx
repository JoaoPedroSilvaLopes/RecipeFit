import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { CadastroForm } from '../components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  CadastroFormInput,
  cadastroUsuarioValidationSchema,
} from '@nx-workspace//shared/domain-types';
import {
  AuthError,
  AuthErrorHandler,
  useErrors,
} from '@nx-workspace//shared/core';
import {
  Header,
  HeaderProps,
  MessageList,
  Particles,
} from '@nx-workspace//shared/components';
import { UsuarioService } from '@nx-workspace//shared/services';

import * as S from './cadastro-page.styles';

const CadastroPage: React.FC = () => {
  const form = useForm<CadastroFormInput>({
    resolver: yupResolver(cadastroUsuarioValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { errors, addError, clearErrors } = useErrors();

  const headerConfig: HeaderProps = {
    title: 'Cadastro',
  };

  const onSubmit: SubmitHandler<CadastroFormInput> = (data) => {
    setIsloading(true);
    UsuarioService.signUp({ data: data })
      .then(() => onSuccess())
      .catch(onError);
  };

  const onSuccess = () => {
    form.reset();
    clearErrors();
  };

  const onError = (error: AuthError) => {
    setIsloading(false);
    const errorMessage = AuthErrorHandler.handleError(error);
    errorMessage && addError(errorMessage);
  };

  return (
    <S.Screen>
      <Particles />
      <Header {...headerConfig} />
      <S.Container>
        <FormProvider {...form}>
          {errors.length > 0 && (
            <MessageList
              variant="danger"
              message={errors}
              onClose={clearErrors}
            />
          )}
          <CadastroForm onSubmit={onSubmit} isLoading={isLoading} />
        </FormProvider>
      </S.Container>
    </S.Screen>
  );
};

export default CadastroPage;
