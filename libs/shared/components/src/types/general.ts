import {
  IButtonProps,
  IIconButtonProps,
  ITextProps,
  IInputProps,
} from 'native-base';
import { LinearGradientProps } from 'react-native-linear-gradient';
import { ImageSourcePropType } from 'react-native/types';

export type ButtonProps = {
  title?: string;
  isLoading?: boolean;
} & IButtonProps;

export type CircularButtonProps = {
  rightImageUrl?: ImageSourcePropType;
  leftImageUrl?: ImageSourcePropType;
  backgroundImageUrl?: ImageSourcePropType;
} & ButtonProps;

export type GradientButtonProps = Omit<ButtonProps, 'title'> &
  LinearGradientProps;

export type IconButtonProps = IIconButtonProps;

export type TextButtonProps = { title: string } & IButtonProps & ITextProps;
