import { ExerciciosService } from '@nx-workspace//shared/services';
import { useEffect, useState } from 'react';

export const useRemove = () => {
  const [id, setId] = useState<string>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (id) {
      setIsloading(true)
      await ExerciciosService.remove({ id, setIsloading });
    }
  }

  return { isLoading, setId };
};
