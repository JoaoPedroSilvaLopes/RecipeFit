import { ComponentType, ReactNode } from 'react';
import { IModalProps } from 'native-base';

export type ModalProps = {
  isOpen?: boolean;
  icon?: ComponentType;
  title?: string;
  message: string;
  actions?: ReactNode[];
  children?: ReactNode;
} & IModalProps;
