import auth from '@react-native-firebase/auth';
import {
  Button,
  TextButton,
  TextFieldInput,
} from '../../../../../libs/shared/components';
import {Text, View} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => navigation.navigate('Home'))
      .catch(error => console.log(error));
  };

  return (
    <View style={S.styles.screen}>
      <Text style={S.styles.title}>Login</Text>
      <View style={S.styles.textFieldGroup}>
        <TextFieldInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextFieldInput
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <Button title="Entrar" onPress={signIn} />
      </View>
      <View style={S.styles.footerContainer}>
        <TextButton
          title="Esqueceu a senha?"
          onPress={() => navigation.navigate('Cadastro')}
        />
        <View style={S.styles.footerButtonGroup}>
          <Text style={S.styles.footerText}>Não possui conta?</Text>
          <TextButton
            styles={[S.styles.fontWeight]}
            onPress={() => navigation.navigate('Cadastro')}
            title="Registre-se"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
