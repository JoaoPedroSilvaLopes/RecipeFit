import { CategoriaExercicioFieldNames } from "@nx-workspace//shared/domain-types";

export const getExercicio = (
  categoria: CategoriaExercicioFieldNames
): string => {
  switch (categoria) {
    case CategoriaExercicioFieldNames.Alongamento:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-exercicio%2Falongamento.png?alt=media&token=4ae62b30-398f-4893-a027-a2513d05d0b4.png';
    case CategoriaExercicioFieldNames.Abdomen:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-exercicio%2Fabdomen.png?alt=media&token=71aacf49-a75e-4ae0-855f-cbaa9234ab54.png';
    case CategoriaExercicioFieldNames.Braco:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-exercicio%2Fbraço.png?alt=media&token=7ddfb916-2f4f-4205-b45b-acfa4de90b5f.png';
    case CategoriaExercicioFieldNames.Costas:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-exercicio%2Fcosta.png?alt=media&token=c919635b-7de5-4f67-a176-a944b333ae82.png';
    case CategoriaExercicioFieldNames.Peito:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-exercicio%2Fpeito.png?alt=media&token=7ceada37-56b7-4b6e-8842-37c3437999aa.png';
    case CategoriaExercicioFieldNames.Perna:
      return 'https://firebasestorage.googleapis.com/v0/b/recipefit-e9f32.appspot.com/o/categoria-exercicio%2Fperna.png?alt=media&token=ba4d7304-690f-40cf-a352-955a30eef7cd.png';
    default:
      return '';
  }
};
