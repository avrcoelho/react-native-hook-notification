import React, { memo } from 'react';

import Animated, { Easing, Layout } from 'react-native-reanimated';
import {
  NotificationPosition,
  NotificationProps,
} from '../../types/Notification';
import { Notification } from '../Notification';
import { useController } from './useController';
import { styles } from './styles';

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
    <Animated.View
      style={[styles.container, styles[position]]}
      layout={Layout.easing(Easing.ease)}
    >
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          {...notification}
          onRemove={onRemove}
        />
      ))}
    </Animated.View>
  ) : null;
};

export const Container = memo(Component);
