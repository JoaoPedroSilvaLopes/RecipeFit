import { useState } from 'react';
import { LoginFormInput } from '@nx-workspace//shared/domain-types';
import { AuthError } from '@nx-workspace//shared/core';
import {
  Button,
  MessageList,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import { LoginPageFacade } from '../../Classes-Auth';

import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const facade = new LoginPageFacade();
  const form = facade.getForm();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const onSubmit = (data: LoginFormInput) => {
    setIsloading(true);
    facade.onSubmit(data, onSuccess, onError);
  };

  const onSuccess = () => {
    setIsloading(false);
    facade.clearErrors();
  };

  const onError = (error: AuthError) => {
    setIsloading(false);
    facade.setErrors(error);
  };

  return (
    <S.Screen>
      <Particles />
      <S.Title>Login</S.Title>
      <S.Container>
        {facade.getErrors().length > 0 && (
          <MessageList
            variant="danger"
            message={facade.getErrors()}
            onClose={() => facade.clearErrors()}
          />
        )}
        {form?.getResult()}
        <Button
          title="Entrar"
          onPress={form?.onSubmit(onSubmit)}
          disabled={!form?.getForm().formState.isValid}
          isLoading={isLoading}
        />
      </S.Container>
      <S.FooterContainer>
        <TextButton
          title="Esqueceu a senha?"
          onPress={() => facade.navigateTo('Cadastro')}
        />
        <S.FooterButtonGroup>
          <S.FooterText>Não possui conta?</S.FooterText>
          <S.FooterTextButton
            onPress={() => facade.navigateTo('Cadastro')}
            title="Registre-se"
          />
        </S.FooterButtonGroup>
      </S.FooterContainer>
    </S.Screen>
  );
};

export default LoginPage;
