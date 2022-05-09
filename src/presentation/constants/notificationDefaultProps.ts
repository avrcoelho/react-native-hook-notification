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
  transition: 'bounce' as NotificationTransition,
  delay: 5000,
  showButtonClose: false,
  closeOnPress: false,
  autoClose: true,
  pauseOnPress: true,
  dragDirection: 'y' as NotificationDragDirection,
  draggable: true,
  titleMaxLines: 1,
  textMaxLines: 2,
  customStyle: {
    container: {},
    title: {},
    text: {},
    icon: {},
    button: {},
    buttonText: {},
  },
};
