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
