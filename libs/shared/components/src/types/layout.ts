import {ReactNode} from 'react';
import {FieldValues, SubmitHandler} from 'react-hook-form';

export type HeaderProps = {
  title?: string;
  actions?: ReactNode[];
};

export type formProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
};

export type MessageListProps = {
  message: string[];
  variant: 'positive' | 'danger';
  onClose?: () => void;
};
