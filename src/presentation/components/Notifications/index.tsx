import React from 'react';

import { useController } from './useController';
import { Notification } from '../Notification';

export const Notifications = (): JSX.Element | null => {
  const { notifications, onRemove } = useController();

  return notifications[0] ? (
    <Notification {...notifications[0]} onRemove={onRemove} />
  ) : null;
};
