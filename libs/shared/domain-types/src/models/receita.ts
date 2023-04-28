export type Receita = {
  id: string;
  foto?: string;
  nome: string;
  ingredientes: string;
  modoDePreparo: string;
  categoriaId: string;
};

export type ReceitaCategoria = {
  id: string;
  nomeCategoria: string;
};

export type ReceitaFormInput = {
  foto?: string;
  nome: string;
  ingredientes: string;
  modoDePreparo: string;
  categoriaId: string;
};

export enum CategoriaReceitaFieldNames {
  Salgados = 'Salgados',
  Bebidas = 'Bebidas',
  Doces = 'Doces',
  Saladas = 'Saladas',
  LowCarb = 'Low Carb',
  ComFrutas = 'Com Frutas',
}
