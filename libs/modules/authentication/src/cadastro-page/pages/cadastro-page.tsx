import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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

import * as S from './cadastro-page.styles';

const CadastroPage: React.FC = () => {
  const form = useForm<CadastroFormInput>({
    resolver: yupResolver(cadastroUsuarioValidationSchema),
    mode: 'onChange',
  });
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { errors, addError, clearErrors } = useErrors();

  const headerConfig: HeaderProps = {
    title: 'Cadastro',
  };

  const onSubmit: SubmitHandler<CadastroFormInput> = (data) => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.senha)
      .then(onSuccess)
      .catch(onError);
  };

  const onSuccess = () => {
    form.reset();
    clearErrors();
    navigation.navigate('Login');
  };

  const onError = (error: AuthError) => {
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
          <CadastroForm onSubmit={onSubmit} />
        </FormProvider>
      </S.Container>
    </S.Screen>
  );
};

export default CadastroPage;
