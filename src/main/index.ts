import { useRef } from 'react';
import { NotificationStore } from '../presentation/store/NotificationStore';
import {
  CustomNotificationParams,
  NotificationParams,
  UseNotificationHook,
} from './types/notificationHook';
import {
  NotificationTheme,
  NotificationType,
} from '../presentation/types/Notification';

export { Notifications as NotificationContainer } from '../presentation/components/Notifications';

export {
  NotificationPosition,
  NotificationTheme,
  NotificationType,
  NotificationTransition,
} from '../presentation/types/Notification';

const notificationStore = NotificationStore.getInstance();

export const useNotification: UseNotificationHook = (hookParams = {}) => {
  const info = (notificationParams: NotificationParams): void => {
    const notification = {
      ...hookParams,
      ...notificationParams,
      type: 'info' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const success = (notificationParams: NotificationParams): void => {
    const notification = {
      ...hookParams,
      ...notificationParams,
      type: 'success' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const error = (notificationParams: NotificationParams): void => {
    const notification = {
      ...hookParams,
      ...notificationParams,
      type: 'error' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const warning = (notificationParams: NotificationParams): void => {
    const notification = {
      ...hookParams,
      ...notificationParams,
      type: 'warning' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const defaultNotification = (
    notificationParams: NotificationParams,
  ): void => {
    const notification = {
      ...hookParams,
      ...notificationParams,
      type: 'default' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const custom = (notificationParams: CustomNotificationParams): void => {
    const notification = {
      ...hookParams,
      ...notificationParams,
      theme: 'custom' as NotificationTheme,
      type: 'custom' as NotificationType,
    };
    notificationStore.add(notification);
  };

  return useRef({
    info,
    error,
    success,
    warning,
    default: defaultNotification,
    custom,
  }).current;
};
