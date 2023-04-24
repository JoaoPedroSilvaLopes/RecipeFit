import * as S from './preview-container.styles';

const PreviewContainer: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Preview</S.Title>
      <S.PreviewGroup>
        <S.PreviewContent variant={'pagina-inicial'} shadow={3}>
          <S.TitleContent variant={'pagina-inicial'}>
            Página Inicial
          </S.TitleContent>
        </S.PreviewContent>
        <S.PreviewContent variant={'receita'} shadow={3}>
          <S.TitleContent variant={'receita'}>Alimentação</S.TitleContent>
        </S.PreviewContent>
        <S.PreviewContent variant={'exercicio'} shadow={3}>
          <S.TitleContent variant={'exercicio'}>Exercício</S.TitleContent>
        </S.PreviewContent>
      </S.PreviewGroup>
    </S.Container>
  );
};

export default PreviewContainer;
