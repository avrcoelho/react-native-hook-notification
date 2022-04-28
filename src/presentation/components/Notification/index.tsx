import React from 'react';
import { View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Layout, Easing } from 'react-native-reanimated';

import { colorsIcon } from '../../constants/colorsIcon';
import { notificationDefaultProps } from '../../constants/notificationDefaultProps';
import { NotificationProps } from '../../types/Notification';
import { Icon } from '../Icon';
import { styles } from './styles';
import { useController } from './useController';

const AIMATION_DELAY = 300;

export const Notification = ({
  type,
  id,
  onRemove,
  title,
  text,
  position = notificationDefaultProps.position,
  theme = notificationDefaultProps.theme,
  transition = notificationDefaultProps.transition,
  delay = notificationDefaultProps.delay,
  showButtonClose = notificationDefaultProps.showButtonClose,
  closeOnPress = notificationDefaultProps.closeOnPress,
  showIcon = notificationDefaultProps.showIcon,
  autoClose = notificationDefaultProps.autoClose,
  pauseOnPressable = notificationDefaultProps.pauseOnPressable,
  dragDirection = notificationDefaultProps.dragDirection,
  draggable = notificationDefaultProps.draggable,
}: NotificationProps): JSX.Element => {
  const {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    withIcon,
    onFinishAnimation,
    animation,
  } = useController({
    dragDirection,
    theme,
    type,
    title,
    showIcon,
    transition,
    position,
    autoClose,
    delay,
    id,
    onRemove,
    pauseOnPressable,
    draggable,
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        entering={animation.enter
          .withCallback(onFinishAnimation)
          .delay(AIMATION_DELAY)}
        exiting={animation.exit}
        style={[styles.container, styles[typeAndTheme], animatedStyle]}
        layout={Layout.easing(Easing.ease)}
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
