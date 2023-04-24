import React from 'react';
import storage from '@react-native-firebase/storage';

type Props = {
  imageUrl?: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const load = async ({ imageUrl, setUrl, setIsloading }: Props) => {
  if (imageUrl) {
    storage()
      .ref('/system-images/diet.png')
      .getDownloadURL()
      .then((url) => {
        setUrl(url);
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e))
      .finally(() => setIsloading(false));
  }
};
