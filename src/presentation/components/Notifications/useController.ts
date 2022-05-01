import { useCallback, useLayoutEffect, useState } from 'react';

import { NotificationStore } from '../../store/NotificationStore';
import { NotificationProps } from '../../types/Notification';

const notificationStore = NotificationStore.getInstance();

type NotificationData = Omit<NotificationProps, 'onRemove' | 'amount'>;

type UseControllerHook = () => {
  onRemove(): void;
  notifications: NotificationData[];
};

export const useController: UseControllerHook = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>(
    notificationStore.get(),
  );

  useLayoutEffect(() => {
    notificationStore.subscribe(setNotifications);
  }, []);

  const onRemove = useCallback((): void => {
    notificationStore.remove();
  }, []);

  return {
    notifications,
    onRemove,
  };
};
