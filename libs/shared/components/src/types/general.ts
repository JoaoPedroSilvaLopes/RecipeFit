import {ReactNode} from 'react';
import {
  ImageSourcePropType,
  TouchableOpacityProps,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native/types';

export type TextFieldInputProps = {
  label: string;
  isRequired?: boolean;
  error?: string;
  mask?: string;
} & TextInputProps;

export type ButtonProps = {
  styles?: StyleProp<TextStyle>[];
  title?: string;
  isLoading?: boolean;
} & TouchableOpacityProps;

export type IconButtonProps = {
  icon: ReactNode;
} & Omit<ButtonProps, 'title'>;

export type CircularButtonProps = {
  rightImageUrl?: ImageSourcePropType;
  leftImageUrl?: ImageSourcePropType;
  backgroundImageUrl?: ImageSourcePropType;
} & ButtonProps;
