export type NotificationType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'default';

export type NotificationPosition = 'top' | 'bottom';

export type NotificationTheme = 'colored' | 'dark' | 'light';

export type NotificationTransition =
  | 'bounce'
  | 'flip'
  | 'fade'
  | 'zoom'
  | 'slide';

export type NotificationDragDirection = 'x' | 'y';

export type NotificationDelay = number;

export type NotificationShowProgressBar = boolean;

export type NotificationShowButtonClose = boolean;

export type NotificationCloseOnPress = boolean;

export type NotificationShowIcon = boolean;

export type NotificationAutoClose = boolean;

export type NotificationPauseOnHover = boolean;

export type NotificationDraggable = boolean;

export interface NotificationProps {
  /**
   * Notification title - Optional
   */
  title?: string;
  /**
   * Notification text
   */
  text: string;
  /**
   * Notification type
   */
  type: NotificationType;
  /**
   * Notification position (Default: top)
   */
  position?: NotificationPosition;
  /**
   * Notification theme (Default: colored)
   */
  theme?: NotificationTheme;
  /**
   * Notification delay in MS (Default: 5000)
   */
  delay?: NotificationDelay;
  /**
   * Notification transition
   */
  transition?: NotificationTransition;
  /**
   * Show progress bar in the notification (Default: true)
   */
  showProgressBar?: NotificationShowProgressBar;
  /**
   * Show button close in the notification (Default: true)
   */
  showButtonClose?: NotificationShowButtonClose;
  /**
   * Close on press in the notification (Default: true)
   */
  closeOnPress?: NotificationCloseOnPress;
  /**
   * show icon (Default: true)
   */
  showIcon?: NotificationShowIcon;
  /**
   * Auto close notification (Default: true)
   */
  autoClose?: NotificationAutoClose;
  /**
   * Notification pause auto close on pressable (Default: true)
   */
  pauseOnPressable?: NotificationPauseOnHover;
  /**
   * Enable or disable drag (Default: true)
   */
  draggable?: NotificationDraggable;
  /**
   * Drag direction (Default: y)
   */
  dragDirection?: NotificationDragDirection;

  id: string;
  amount: number;
  onRemove(id: string): void;
}