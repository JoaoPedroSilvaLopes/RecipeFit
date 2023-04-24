import { Exercicio } from '@nx-workspace//shared/domain-types';
import { ExerciciosService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
};

export const useLoadById = ({ id }: Props) => {
  const [data, setData] = useState<Exercicio>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsloading(true);
    id && (await ExerciciosService.loadById({ id: id, setData, setIsloading }));
  };

  return { data, isLoading };
};
