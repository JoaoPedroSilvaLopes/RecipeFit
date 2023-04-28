import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

export const useCurrentAccount = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    subscriber();
  }, []);

  const subscriber = () => {
    return auth().onAuthStateChanged(setUser);
  };

  return user;
};
