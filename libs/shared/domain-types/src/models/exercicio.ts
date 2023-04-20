export type Exercicio = {
  id: number;
  foto?: string;
  nome: string;
  categoriaId: AvailableCategoriasExerciciosIdentificacaoTipo;
};

export const getAvailableCategoriaExercicioTitle = (
  idExericio: AvailableCategoriasExerciciosIdentificacaoTipo
): string => {
  switch (idExericio) {
    case AvailableCategoriasExerciciosIdentificacaoTipo.Braco:
      return 'Braço';
      break;
    case AvailableCategoriasExerciciosIdentificacaoTipo.Costas:
      return 'Costas';
      break;
    case AvailableCategoriasExerciciosIdentificacaoTipo.Peito:
      return 'Peito';
      break;
    case AvailableCategoriasExerciciosIdentificacaoTipo.Abdomen:
      return 'Abdômen';
      break;
    case AvailableCategoriasExerciciosIdentificacaoTipo.Perna:
      return 'Perna';
      break;
    case AvailableCategoriasExerciciosIdentificacaoTipo.Alongamento:
      return 'Alongamento';
      break;
    default:
      return '';
      break;
  }
};

export enum AvailableCategoriasExerciciosIdentificacaoTipo {
  Braco = 1,
  Costas,
  Peito,
  Abdomen,
  Perna,
  Alongamento,
}
