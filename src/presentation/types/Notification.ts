import { FunctionComponentElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type NotificationType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'custom'
  | 'default';

export type NotificationPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

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

export type NotificationAutoClose = boolean;

export type NotificationCloseOnPress = boolean;

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
   * Show button close in the notification (Default: false)
   */
  showButtonClose?: NotificationShowButtonClose;
  /**
   * Auto close notification (Default: true)
   */
  autoClose?: NotificationAutoClose;
  /**
   * Pause auto close on pressable (Default: true)
   */
  pauseOnPress?: NotificationPauseOnHover;
  /**
   * Close on press on notification (Default: false)
   */
  closeOnPress?: NotificationCloseOnPress;
  /**
   * Enable or disable drag (Default: true)
   */
  draggable?: NotificationDraggable;
  /**
   * Drag direction (Default: y)
   */
  dragDirection?: NotificationDragDirection;
  /**
   * Render an icon in the left side notification. Obs: Dimensions: 24x24
   */
  icon?: FunctionComponentElement<any>;
  /**
   * Styles for custom notificaion type
   */
  customStyle?: {
    container?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
    text?: StyleProp<TextStyle>;
    icon?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
  };

  /**
   * Maximum number of lines for notification title. (Default: 1)
   */
  titleMaxLines?: number;
  /**
   * Maximum number of lines for notification text. (Default: 2)
   */
  textMaxLines?: number;
  /**
   * Offset from the X axis of the screen (in px). (Default: 16)
   */
  xOffset?: number;
  /**
   * Called on Notification press
   */
  onPress?: () => void;

  onRemove(): void;
}
