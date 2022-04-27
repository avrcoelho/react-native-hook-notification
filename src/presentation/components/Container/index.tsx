import React, { memo } from 'react';
import { View } from 'react-native';

import {
  NotificationPosition,
  NotificationProps,
} from '../../types/Notification';
import { Notification } from '../Notification';
import { useController } from './useController';
import { styles } from './styles';
import { defineAnimationSize } from '../../utils/defineAnimationSize';

interface ContainerProps {
  isVisible: boolean;
  notifications: Omit<NotificationProps, 'onRemove' | 'amount'>[];
  position: NotificationPosition;
  onRemove(id: string): void;
}

const Component = ({
  isVisible,
  notifications,
  position,
  onRemove,
}: ContainerProps): JSX.Element | null => {
  const { show } = useController({ isVisible });

  return show ? (
    <View
      style={[
        styles.container,
        styles[position],
        {
          width: defineAnimationSize(),
        },
      ]}
    >
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          {...notification}
          onRemove={onRemove}
          amount={notifications.length}
        />
      ))}
    </View>
  ) : null;
};

export const Container = memo(Component);
