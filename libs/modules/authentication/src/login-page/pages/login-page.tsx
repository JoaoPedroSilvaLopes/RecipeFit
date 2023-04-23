import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  LoginFormInput,
  loginUsuarioValidationSchema,
} from '@nx-workspace//shared/domain-types';
import {
  AuthError,
  AuthErrorHandler,
  useErrors,
} from '@nx-workspace//shared/core';
import {
  MessageList,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import LoginForm from '../components/login-form/login-form';

import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const form = useForm<LoginFormInput>({
    resolver: yupResolver(loginUsuarioValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { errors, addError, clearErrors } = useErrors();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    setIsloading(true);
    auth()
      .signInWithEmailAndPassword(data.email, data.senha)
      .then(onSuccess)
      .catch(onError);
  };

  const onSuccess = () => {
    clearErrors();
    form.reset();
  };

  const onError = (error: AuthError) => {
    setIsloading(false);
    const errorMessage = AuthErrorHandler.handleError(error);
    errorMessage && addError(errorMessage);
  };

  const navToCadastro = () => {
    navigation.navigate('Cadastro');
    clearErrors();
    form.reset();
  };

  const navToRecuperarSenha = () => {
    navigation.navigate('RecuperarSenha');
    clearErrors();
    form.reset();
  };

  return (
    <S.Screen>
      <Particles />
      <S.Title>Login</S.Title>
      <S.Container>
        <FormProvider {...form}>
          {errors.length > 0 && (
            <MessageList
              variant="danger"
              message={errors}
              onClose={clearErrors}
            />
          )}
          <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
        </FormProvider>
      </S.Container>
      <S.FooterContainer>
        <TextButton
          title="Esqueceu a senha?"
          onPress={() => navToRecuperarSenha()}
        />
        <S.FooterButtonGroup>
          <S.FooterText>Não possui conta?</S.FooterText>
          <S.FooterTextButton
            onPress={() => navToCadastro()}
            title="Registre-se"
          />
        </S.FooterButtonGroup>
      </S.FooterContainer>
    </S.Screen>
  );
};

export default LoginPage;
