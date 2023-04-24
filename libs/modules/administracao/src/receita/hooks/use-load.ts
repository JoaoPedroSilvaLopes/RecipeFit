import { Receita } from '@nx-workspace//shared/domain-types';
import { ReceitasService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

export const useLoad = () => {
  const [data, setData] = useState<Receita[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsloading(true)
    return await ReceitasService.load({ setData, setIsloading });
  }

  return { data, isLoading };
};
