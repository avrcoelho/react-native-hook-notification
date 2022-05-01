import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { notificationDefaultProps } from '../../constants/notificationDefaultProps';
import { NotificationProps } from '../../types/Notification';
import { getPositionStyles, styles } from './styles';
import { useController } from './useController';

export const Notification = ({
  type,
  onRemove,
  title,
  text,
  position = notificationDefaultProps.position,
  theme = notificationDefaultProps.theme,
  transition = notificationDefaultProps.transition,
  delay = notificationDefaultProps.delay,
  showButtonClose = notificationDefaultProps.showButtonClose,
  autoClose = notificationDefaultProps.autoClose,
  pauseOnPressable = notificationDefaultProps.pauseOnPressable,
  dragDirection = notificationDefaultProps.dragDirection,
  draggable = notificationDefaultProps.draggable,
}: NotificationProps): JSX.Element => {
  const {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    animation,
    isPaused,
    onFinishAnimation,
    onRemoveNotification,
    isPortrait,
  } = useController({
    dragDirection,
    theme,
    type,
    title,
    transition,
    position,
    autoClose,
    delay,
    onRemove,
    pauseOnPressable,
    draggable,
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        entering={animation.enter.withCallback(onFinishAnimation)}
        exiting={animation.exit}
        style={[
          styles.container,
          styles[typeAndTheme],
          animatedStyle,
          getPositionStyles(isPortrait)[position],
        ]}
        accessible
        accessibilityState={{
          selected: isPaused,
        }}
        accessibilityRole="alert"
      >
        {showButtonClose && (
          <TouchableOpacity
            onPress={onRemoveNotification}
            style={[styles.buttonClose, styles[`buttonClose${theme}`]]}
            accessibilityLabel="Close notification"
            activeOpacity={0.5}
          >
            <Text
              style={[
                styles.buttonCloseText,
                styles[`buttonCloseText${theme}`],
              ]}
            >
              &#x2715;
            </Text>
          </TouchableOpacity>
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
