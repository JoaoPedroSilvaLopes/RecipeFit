import { Exercicio } from '@nx-workspace//shared/domain-types';
import { ExerciciosService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
};

export const useLoadByCategoria = ({ id }: Props) => {
  const [data, setData] = useState<Exercicio[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsloading(true);
    return (
      id &&
      (await ExerciciosService.loadByCategoria({
        id,
        setData,
        setIsloading,
      }))
    );
  };

  return { data, isLoading };
};
