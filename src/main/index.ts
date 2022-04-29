import { useCallback, useRef } from 'react';
import { NotificationStore } from '../presentation/store/NotificationStore';
import {
  NotificationParams,
  UseNotificationHook,
} from './types/notificationHook';
import { NotificationType } from '../presentation/types/Notification';

export { Notifications as NotificationContainer } from '../presentation/components/Notifications';

export {
  NotificationPosition,
  NotificationTheme,
  NotificationType,
  NotificationTransition,
} from '../presentation/types/Notification';

const notificationStore = NotificationStore.getInstance();

export const useNotification: UseNotificationHook = (
  hookParams = { position: 'top-right' },
) => {
  const info = useCallback(
    (notificationParams: NotificationParams) => {
      const id = String(Date.now());
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'info' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const success = useCallback(
    (notificationParams: NotificationParams) => {
      const id = String(Date.now());
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'success' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const error = useCallback(
    (notificationParams: NotificationParams) => {
      const id = String(Date.now());
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'error' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const warning = useCallback(
    (notificationParams: NotificationParams) => {
      const id = String(Date.now());
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'warning' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const defaultNotification = useCallback(
    (notificationParams: NotificationParams) => {
      const id = String(Date.now());
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'default' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  return useRef({
    info,
    error,
    success,
    warning,
    default: defaultNotification,
  }).current;
};