export type MessageListProps = {
  message: string[];
  variant: 'positive' | 'danger';
  onClose?: () => void;
};
