import {
  NotificationDragDirection,
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
} from '../types/Notification';

export const notificationDefaultProps = {
  title: '',
  position: 'top-center' as NotificationPosition,
  theme: 'colored' as NotificationTheme,
  transition: 'slide' as NotificationTransition,
  delay: 5000,
  showButtonClose: true,
  autoClose: true,
  pauseOnPressable: true,
  dragDirection: 'y' as NotificationDragDirection,
  draggable: true,
};
