import React from 'react';

import { UseNotificationParams } from '../../../main/types/notificationHook';
import { Notification } from '../Notification';
import { useController } from './useController';

export const Notifications = (
  props: UseNotificationParams,
): JSX.Element | null => {
  const { notifications, onRemove } = useController();

  return notifications[0] ? (
    <Notification {...props} {...notifications[0]} onRemove={onRemove} />
  ) : null;
};
