import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  RecuperarSenhaFormInput,
  recuperarSenhaValidationSchema,
} from '@nx-workspace//shared/domain-types';
import {
  MessageList,
  Particles,
  TextButton,
} from '@nx-workspace//shared/components';
import RecuperarSenhaForm from '../components/recuperar-senha-form/recuperar-senha-form';

import * as S from './recuperar-senha-page.styles';
import { IconRecuperarSenha } from '../components';

const LoginPage: React.FC = () => {
  const form = useForm<RecuperarSenhaFormInput>({
    resolver: yupResolver(recuperarSenhaValidationSchema),
    mode: 'onChange',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onSubmit: SubmitHandler<RecuperarSenhaFormInput> = (data) => {
    setIsloading(true);
    auth().sendPasswordResetEmail(data.email).then(onSuccess).catch(onSuccess);
  };

  const onSuccess = () => {
    setIsloading(false);
    form.reset();
    setMessage(
      'E-mail enviado com sucesso, por favor verifique sua caixa de entrada.'
    );
  };

  const navToLogin = () => {
    navigation.navigate('Login');
    form.reset();
  };

  const onClose = () => {
    setMessage(undefined)
  }

  return (
    <S.Screen>
      <Particles />
      <IconRecuperarSenha />
      <S.Container>
        <FormProvider {...form}>
          {message && <MessageList variant="positive" message={[message]} onClose={onClose}/>}
          <RecuperarSenhaForm onSubmit={onSubmit} isLoading={isLoading} />
        </FormProvider>
      </S.Container>
      <TextButton title="Retornar" onPress={() => navToLogin()} />
    </S.Screen>
  );
};

export default LoginPage;
