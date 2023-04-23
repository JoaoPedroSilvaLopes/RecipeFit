export type Exercicio = {
  id: string;
  foto?: string;
  nome: string;
  categoriaId: number;
};

export type ExercicioCategoria = {
  id: string;
  nomeCategoria: string;
};
