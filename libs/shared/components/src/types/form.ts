import { IInputProps, ISelectProps } from 'native-base';

export type TextFieldInputProps = {
  label: string;
  error?: string;
} & IInputProps;

export type SelectProps = {
  isRequired?: boolean;
  isReadOnly?: boolean;
  label: string;
  error?: string;
  data?: DataProps[];
} & ISelectProps;

export type DataProps = {
  value: string
  label: string
}
