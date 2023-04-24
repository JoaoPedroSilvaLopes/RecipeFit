import { ReactNode } from 'react';
import { IModalProps } from 'native-base';

export type ConfirmModalProps = {
  isOpen?: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  isLoading?: boolean;
} & IModalProps;

export type ModalProps = {
  children?: ReactNode;
} & Omit<ConfirmModalProps, 'message' | 'onConfirm'>;
