import * as S from './usuario-picture.styles';

const UsuarioPicture: React.FC = () => {
  const image = undefined;

  return (
    <S.Container shadow={3}>
      {image ? (
        <S.ImageBackground source={image} />
      ) : (
        <S.IconPerfil name="user-circle-o" size={180} />
      )}
    </S.Container>
  );
};

export default UsuarioPicture;
