import {
  IButtonProps,
  IIconButtonProps,
  ISpinnerProps,
  ITextProps,
} from 'native-base';
import { ReactNode } from 'react';
import { LinearGradientProps } from 'react-native-linear-gradient';

export type ButtonProps = {
  title?: string;
  isLoading?: boolean;
  children?: ReactNode;
} & IButtonProps;

export type CircularButtonProps = {
  backgroundImageUrl?: string;
} & ButtonProps;

export type GradientButtonProps = Omit<ButtonProps, 'title'> &
  LinearGradientProps;

export type IconButtonProps = IIconButtonProps;

export type TextButtonProps = { title: string } & IButtonProps & ITextProps;

export type SpinnerProps = ISpinnerProps;
