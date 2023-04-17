declare module "*.jpg" {
  const path: ImageSourcePropType;
  export default path;
}

declare module "*.png" {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}
