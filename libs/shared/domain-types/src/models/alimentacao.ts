export type Receita = {
  id: string;
  foto?: string;
  nome: string;
  ingredientes: string[];
  modoDePreparo: string[];
  categoriaId: AvailableCategoriasReceitasIdentificacaoTipo;
};

export const getAvailableCategoriaReceitaTitle = (
  idReceita: AvailableCategoriasReceitasIdentificacaoTipo
): string => {
  switch (idReceita) {
    case AvailableCategoriasReceitasIdentificacaoTipo.Salgados:
      return 'Salgados';
      break;
    case AvailableCategoriasReceitasIdentificacaoTipo.Doces:
      return 'Doces';
      break;
    case AvailableCategoriasReceitasIdentificacaoTipo.Saladas:
      return 'Saladas';
      break;
    case AvailableCategoriasReceitasIdentificacaoTipo.Bebidas:
      return 'Bebidas';
      break;
    case AvailableCategoriasReceitasIdentificacaoTipo.ComFrutas:
      return 'Com Frutas';
      break;
    case AvailableCategoriasReceitasIdentificacaoTipo.LowCarb:
      return 'Low Carb';
      break;
    default:
      return '';
      break;
  }
};

export enum AvailableCategoriasReceitasIdentificacaoTipo {
  Salgados = 1,
  Doces,
  Saladas,
  Bebidas,
  ComFrutas,
  LowCarb,
}
