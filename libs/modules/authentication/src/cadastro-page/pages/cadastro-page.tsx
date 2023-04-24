import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
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
  const [isLoading, setIsloading] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { errors, addError, clearErrors } = useErrors();

  const headerConfig: HeaderProps = {
    title: 'Cadastro',
  };

  const onSubmit: SubmitHandler<CadastroFormInput> = (data) => {
    setIsloading(true);
    auth()
      .createUserWithEmailAndPassword(data.email, data.senha)
      .then(() => onSuccess(data))
      .catch(onError)
      .finally(() => setIsloading(false));
  };

  const returnPage = () => {
    navigation.goBack();
  };

  const onSuccess = (data: CadastroFormInput) => {
    firestore().collection('usuario').doc(auth().currentUser?.uid).set({
      nome: data.nome,
      email: data.email,
      peso: data.peso,
      altura: data.altura,
    });
    form.reset();
    clearErrors();
    returnPage();
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
          <CadastroForm onSubmit={onSubmit} isLoading={isLoading} />
        </FormProvider>
      </S.Container>
    </S.Screen>
  );
};

export default CadastroPage;
