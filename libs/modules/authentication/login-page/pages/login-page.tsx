import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {MessageList, TextButton} from '../../../../../libs/shared/components';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LoginForm from '../components/login-form/login-form';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {
  LoginFormInput,
  loginUsuarioValidationSchema,
} from '../../../../shared/domain-types';
import {AuthError, AuthErrorHandler, useErrors} from '../../../../shared/core';
import {yupResolver} from '@hookform/resolvers/yup';

import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const form = useForm<LoginFormInput>({
    resolver: yupResolver(loginUsuarioValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {errors, addError, clearErrors} = useErrors();

  const onSubmit: SubmitHandler<LoginFormInput> = data => {
    setIsloading(true);
    auth()
      .signInWithEmailAndPassword(data.email, data.senha)
      .then(onSuccess)
      .catch(onError);
  };

  const onSuccess = () => {
    setIsloading(false);
    navigation.navigate('Home');
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
    navigation.navigate('Cadastro');
    clearErrors();
    form.reset();
  };

  return (
    <View style={S.styles.screen}>
      <Text style={S.styles.title}>Login</Text>
      <View style={S.styles.container}>
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
      </View>
      <View style={S.styles.footerContainer}>
        <TextButton
          title="Esqueceu a senha?"
          onPress={() => navToRecuperarSenha()}
        />
        <View style={S.styles.footerButtonGroup}>
          <Text style={S.styles.footerText}>Não possui conta?</Text>
          <TextButton
            styles={[S.styles.fontWeight]}
            onPress={() => navToCadastro()}
            title="Registre-se"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
