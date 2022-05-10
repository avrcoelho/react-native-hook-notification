import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  PanGestureHandler,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
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
  onPress,
  position = notificationDefaultProps.position,
  theme = notificationDefaultProps.theme,
  transition = notificationDefaultProps.transition,
  delay = notificationDefaultProps.delay,
  showButtonClose = notificationDefaultProps.showButtonClose,
  autoClose = notificationDefaultProps.autoClose,
  pauseOnPress = notificationDefaultProps.pauseOnPress,
  dragDirection = notificationDefaultProps.dragDirection,
  draggable = notificationDefaultProps.draggable,
  customStyle = notificationDefaultProps.customStyle,
  titleMaxLines = notificationDefaultProps.titleMaxLines,
  closeOnPress = notificationDefaultProps.closeOnPress,
  textMaxLines = notificationDefaultProps.textMaxLines,
  xOffset = notificationDefaultProps.xOffset,
}: NotificationProps): JSX.Element => {
  const {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    animation,
    isPaused,
    onFinishAnimation,
    onGetNotificationHeight,
    onPressNotification,
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
    pauseOnPress,
    draggable,
    closeOnPress,
    onPress,
  });
  const buttonCloseStyleIndex = `buttonClose${theme}` as 'buttonClosecolored';
  const buttonCloseTextStyleIndex =
    `buttonCloseText${theme}` as 'buttonCloseTextcolored';

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
          getPositionStyles({ xOffset })[position],
        ]}
      >
        <TouchableWithoutFeedback
          style={styles.button}
          onPress={onPressNotification}
          disabled={!closeOnPress && !onPress}
        >
          <>
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
                  styles[buttonCloseStyleIndex] || customStyle.button,
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
                    styles[buttonCloseTextStyleIndex] || customStyle.buttonText,
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
                  style={[
                    styles.title,
                    styles[typeAndTheme] || customStyle.title,
                  ]}
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
          </>
        </TouchableWithoutFeedback>
      </Animated.View>
    </PanGestureHandler>
  );
};
