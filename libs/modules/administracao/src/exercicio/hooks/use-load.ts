import { Exercicio } from '@nx-workspace//shared/domain-types';
import { ExerciciosService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

export const useLoad = () => {
  const [data, setData] = useState<Exercicio[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsloading(true)
    return await ExerciciosService.load({ setData, setIsloading });
  }

  return { data, isLoading };
};
