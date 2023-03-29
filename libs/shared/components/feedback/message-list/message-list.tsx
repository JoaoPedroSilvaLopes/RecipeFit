import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import {MessageListProps} from '../../types';
import {IconButton} from '../../general';

import * as S from './message-list.styles';

const MessageList: React.FC<MessageListProps> = ({
  onClose,
  variant,
  message,
}) => {
  return message.length > 0 ? (
    <View
      style={[
        S.styles.messagePanel,
        variant === 'positive'
          ? S.styles.positiveVariant
          : S.styles.dangerVariant,
      ]}>
      {message.map((message, index) => {
        return (
          <View style={S.styles.listContainer}>
            <Text
              style={[
                S.styles.listText,
                variant === 'positive'
                  ? S.styles.positiveVariant
                  : S.styles.dangerVariant,
              ]}
              key={index}>
              {`\u2022 ${message}`}
            </Text>
            {index === 0 && (
              <IconButton
                style={S.styles.onCloseButton}
                icon={
                  <Icon
                    name="x"
                    size={10}
                    color={variant === 'positive' ? '#0C622E' : '#842e3c'}
                  />
                }
                onPress={onClose}
              />
            )}
          </View>
        );
      })}
    </View>
  ) : null;
};

export default MessageList;
