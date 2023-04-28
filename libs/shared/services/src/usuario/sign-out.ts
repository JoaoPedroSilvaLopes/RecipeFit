import auth from '@react-native-firebase/auth';

export const signOut = async () => {
  return auth().signOut();
};
