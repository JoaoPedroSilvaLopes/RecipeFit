export type Exercicio = {
  id: string;
  foto?: string;
  nome: string;
  categoriaId: string;
};

export type ExercicioCategoria = {
  id: string;
  nomeCategoria: string;
};

export type ExercicioFormInput = {
  foto?: string;
  nome: string;
  categoriaId: string;
};

export enum CategoriaExercicioFieldNames {
  Alongamento = 'Alongamento',
  Abdomen = 'Abdômen',
  Braco = 'Braço',
  Costas = 'Costas',
  Peito = 'Peito',
  Perna = 'Perna',
}
