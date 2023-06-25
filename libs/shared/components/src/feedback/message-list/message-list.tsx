import { MessageListProps } from '../../types';

import * as S from './message-list.styles';

const MessageList: React.FC<MessageListProps> = ({
  onClose,
  variant,
  message,
}) => {
  return message.length > 0 ? (
    <S.MessageContainer variant={variant}>
      {message.map((message, index) => {
        return (
          <S.ListContainer key={index}>
            <S.ListText variant={variant}>{`\u2022 ${message}`}</S.ListText>
            {index === 0 && (
              <S.OnCloseButton
                icon={<S.IconWrapper variant={variant} name="x" size={6} />}
                variant={variant}
                onPress={onClose}
              />
            )}
          </S.ListContainer>
        );
      })}
    </S.MessageContainer>
  ) : null;
};

export default MessageList;
