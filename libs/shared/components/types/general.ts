import {ReactNode} from 'react';
import {
  ImageSourcePropType,
  TouchableOpacityProps,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native/types';

export type TextFieldInputProps = {} & TextInputProps;

export type ButtonProps = {
  styles?: StyleProp<TextStyle>[];
  title?: string;
} & TouchableOpacityProps;

export type IconButtonProps = {
  icon: ReactNode;
} & Omit<ButtonProps, 'title'>;

export type CircularButtonProps = {
  rightImageUrl?: ImageSourcePropType;
  leftImageUrl?: ImageSourcePropType;
  backgroundImageUrl?: ImageSourcePropType;
} & ButtonProps;
