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
  icon,
  position = notificationDefaultProps.position,
  theme = notificationDefaultProps.theme,
  transition = notificationDefaultProps.transition,
  delay = notificationDefaultProps.delay,
  showButtonClose = notificationDefaultProps.showButtonClose,
  autoClose = notificationDefaultProps.autoClose,
  pauseOnPressable = notificationDefaultProps.pauseOnPressable,
  dragDirection = notificationDefaultProps.dragDirection,
  draggable = notificationDefaultProps.draggable,
  customStyle = notificationDefaultProps.customStyle,
  titleMaxLines = notificationDefaultProps.titleMaxLines,
  textMaxLines = notificationDefaultProps.textMaxLines,
}: NotificationProps): JSX.Element => {
  const {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    animation,
    isPaused,
    onFinishAnimation,
    onGetNotificationHeight,
    isPortrait,
    width,
  } = useController({
    dragDirection,
    theme,
    type,
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
        onLayout={onGetNotificationHeight}
        accessible
        accessibilityRole="alert"
        accessibilityState={{
          selected: isPaused,
        }}
        style={[
          styles.container,
          { width },
          styles[typeAndTheme] || customStyle.container,
          animatedStyle,
          getPositionStyles(isPortrait)[position],
        ]}
      >
        {!!icon && (
          <View
            style={[
              styles.iconContainer,
              type === 'custom' ? customStyle.icon : {},
            ]}
          >
            {icon}
          </View>
        )}

        {showButtonClose && (
          <TouchableOpacity
            onPress={onRemove}
            style={[
              styles.buttonClose,
              styles[`buttonClose${theme}`] || customStyle.button,
            ]}
            hitSlop={{
              bottom: 5,
              top: 5,
              left: 5,
              right: 5,
            }}
            accessibilityLabel="Close notification"
            activeOpacity={0.5}
          >
            <Text
              style={[
                styles.buttonCloseText,
                styles[`buttonCloseText${theme}`] || customStyle.buttonText,
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
              numberOfLines={titleMaxLines}
              style={[styles.title, styles[typeAndTheme] || customStyle.title]}
            >
              {title}
            </Text>
          )}
          <Text
            ellipsizeMode="tail"
            numberOfLines={textMaxLines}
            style={[styles.text, styles[typeAndTheme] || customStyle.text]}
          >
            {text}
          </Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};
