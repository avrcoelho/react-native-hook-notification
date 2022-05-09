import { NotificationProps } from '../../presentation/types/Notification';

export type UseNotificationParams = Omit<
  NotificationProps,
  'title' | 'text' | 'type' | 'onRemove' | 'onPress'
>;

export type CustomNotificationParams = Omit<
  NotificationProps,
  'onRemove' | 'type'
>;

export type NotificationParams = Omit<CustomNotificationParams, 'customStyle'>;

export type UseNotificationHook = (hookParams?: UseNotificationParams) => {
  default(notificationParams: NotificationParams): void;
  success(notificationParams: NotificationParams): void;
  error(notificationParams: NotificationParams): void;
  warning(notificationParams: NotificationParams): void;
  info(notificationParams: NotificationParams): void;
  custom(notificationParams: CustomNotificationParams): void;
};
