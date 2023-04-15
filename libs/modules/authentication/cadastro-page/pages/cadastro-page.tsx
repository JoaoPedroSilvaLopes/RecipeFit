import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CadastroForm} from '../components';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {
  Header,
  HeaderProps,
  MessageList,
} from '../../../../../libs/shared/components';
import {
  CadastroFormInput,
  cadastroUsuarioValidationSchema,
} from '../../../../shared/domain-types';
import {AuthError, AuthErrorHandler, useErrors} from '../../../../shared/core';

import * as S from './cadastro-page.styles';

const CadastroPage: React.FC = () => {
  const form = useForm<CadastroFormInput>({
    resolver: yupResolver(cadastroUsuarioValidationSchema),
    mode: 'onChange',
  });
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {errors, addError, clearErrors} = useErrors();

  const headerConfig: HeaderProps = {
    title: 'Cadastro',
  };

  const onSubmit: SubmitHandler<CadastroFormInput> = data => {
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
    <View style={S.styles.screen}>
      <Header {...headerConfig} />
      <View style={S.styles.container}>
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
      </View>
    </View>
  );
};

export default CadastroPage;
