import { Exercicio } from '@nx-workspace//shared/domain-types';
import { ExerciciosService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
};

export const useLoadById = ({ id }: Props) => {
  const [data, setData] = useState<Exercicio>();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    return await ExerciciosService.loadById({ id: id, setData });
  };

  return { data };
};
