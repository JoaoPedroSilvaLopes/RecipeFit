import Icon from 'react-native-vector-icons/FontAwesome5';
import * as S from './icon-recuperar-senha.styles';

const IconRecuperarSenha: React.FC = () => {
  return (
    <>
      <S.Container>
        <Icon
          name='lock'
          size={150}
          color={'#ffffff'}
        />
      </S.Container>
      <S.Title>Esqueceu sua senha?</S.Title>
      <S.SubTitle>
        Insira o seu endereço de E-mail para ser enviado um link para restaurar
        suas informações.
      </S.SubTitle>
    </>
  );
};

export default IconRecuperarSenha;
