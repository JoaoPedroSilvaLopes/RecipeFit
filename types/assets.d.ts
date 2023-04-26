import { ImageSourcePropType } from 'react-native';

declare module '*.jpg' {
  const path: ImageSourcePropType;
  export default path;
}

declare module '*.png' {
  const path: ImageSourcePropType;
  export default path;
}
