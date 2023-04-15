import {useState} from 'react';

export type UseErrors = {
  errors: string[];
  setErrors: (errors: string[]) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
};

export const useErrors = (): UseErrors => {
  const [errors, setErrors] = useState<string[]>([]);

  const addError = (message: string) => {
    if (!errors.includes(message)) {
      setErrors([...errors, message]);
    }
  };

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    errors,
    setErrors,
    addError,
    clearErrors,
  };
};
