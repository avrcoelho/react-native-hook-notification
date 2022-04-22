import React from 'react';
import { View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {
  fadeEntering,
  fadeExiting,
  flipEntering,
  flipExiting,
  zoomEntering,
  zoomExiting,
} from '../../constants/animations';

import { colorsIcon } from '../../constants/colorsIcon';
import { notificationDefaultProps } from '../../constants/notificationDefaultProps';
import { NotificationProps } from '../../types/Notification';
import { Icon } from '../Icon';
import { styles } from './styles';
import { useController } from './useController';

export const Notification = ({
  type,
  id,
  onRemove,
  title,
  text,
  amount,
  position = notificationDefaultProps.position,
  theme = notificationDefaultProps.theme,
  transition = notificationDefaultProps.transition,
  delay = notificationDefaultProps.delay,
  showProgressBar = notificationDefaultProps.showProgressBar,
  showButtonClose = notificationDefaultProps.showButtonClose,
  closeOnPress = notificationDefaultProps.closeOnPress,
  showIcon = notificationDefaultProps.showIcon,
  autoClose = notificationDefaultProps.autoClose,
  pauseOnPressable = notificationDefaultProps.pauseOnPressable,
  dragDirection = notificationDefaultProps.dragDirection,
  draggable = notificationDefaultProps.draggable,
}: NotificationProps): JSX.Element => {
  const { animatedStyle, onGestureEvent, typeAndTheme, withIcon } =
    useController({
      dragDirection,
      theme,
      type,
      title,
      showIcon,
    });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        entering={fadeEntering}
        exiting={fadeExiting}
        style={[styles.container, styles[typeAndTheme], animatedStyle]}
      >
        {withIcon && (
          <View style={styles.iconContainer}>
            <Icon type={type} color={colorsIcon[theme][type]} />
          </View>
        )}

        <View style={styles.textContainer}>
          {!!title && (
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[styles.title, styles[typeAndTheme]]}
            >
              {title}
            </Text>
          )}
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={[styles.text, styles[typeAndTheme]]}
          >
            {text}
          </Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};
