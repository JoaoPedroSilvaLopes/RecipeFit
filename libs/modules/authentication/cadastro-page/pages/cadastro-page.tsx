import auth from '@react-native-firebase/auth';
import {
  Header,
  HeaderProps,
  TextButton,
  TextFieldInput,
} from '../../../../../libs/shared/components';
import {View} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import * as S from './cadastro-page.styles';

const CadastroPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => navigation.navigate('Login'))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Já existe uma conta com o endereço de email fornecido.');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('E-mail inválido');
        }
      });
  };

  const headerConfig: HeaderProps = {
    title: 'Cadastro',
  };

  return (
    <View style={S.styles.screen}>
      <Header {...headerConfig} />
      <View style={S.styles.textFieldGroup}>
        <TextFieldInput
          placeholder="Nome"
          // value={email}
          // onChangeText={setEmail}
        />
        <TextFieldInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextFieldInput
          placeholder="Data de Nascimento"
          // value={senha}
          // onChangeText={setSenha}
        />
        <TextFieldInput
          placeholder="Peso"
          // value={senha}
          // onChangeText={setSenha}
        />
        <TextFieldInput
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TextFieldInput
          placeholder="Confirmar senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={S.styles.footerContainer}>
        <View style={S.styles.footerButtonGroup}>
          <TextButton
            title="Retornar"
            onPress={() => navigation.navigate('Login')}
          />
          <TextButton title="Concluir" onPress={signUp} />
        </View>
      </View>
    </View>
  );
};

export default CadastroPage;
