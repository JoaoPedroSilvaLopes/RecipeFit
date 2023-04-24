import {
  ExercicioFormInput,
} from '@nx-workspace//shared/domain-types';
import { ExerciciosService, FotoService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  data: ExercicioFormInput;
};

export const add = ({ data }: Props) => {
  FotoService.add({ imageUri: data.foto, nome: data.nome });
  ExerciciosService.add({ data: data });
};
