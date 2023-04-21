import { IInputProps } from 'native-base';

export type TextFieldInputProps = {
  label: string;
  error?: string;
} & IInputProps;
