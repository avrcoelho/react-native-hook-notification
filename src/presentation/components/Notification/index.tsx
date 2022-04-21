import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animtaed, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

import { notificationDefaultProps } from '../../constants/notificationDefaultProps';
import { NotificationProps } from '../../types/Notification';
import { Icon } from '../Icon';
import { styles } from './styles';

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
  const { width } = useWindowDimensions();
  const onGetLimitToRemove = (): number => {
    const limites = {
      x: width - 80,
      y: title ? 80 : 60,
    };
    return limites[dragDirection];
  };
  const limitToRemove = onGetLimitToRemove();

  const transitionDirection = dragDirection.toUpperCase() as 'X' | 'Y';
  const positionOnScreen = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context[`pos${transitionDirection}`] = positionOnScreen.value;
    },
    onActive(event, context: any) {
      // if (event.translationY <= 0) return;
      positionOnScreen.value =
        context[`pos${transitionDirection}`] +
        event[`translation${transitionDirection}`];
    },
    onEnd() {
      positionOnScreen.value = withTiming(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      positionOnScreen.value,
      [-limitToRemove, 0, limitToRemove],
      [0, 1, 0],
    ),
    transform: [
      {
        [`translate${transitionDirection}` as 'translateX']:
          positionOnScreen.value,
      },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animtaed.View
        style={[styles.container, styles.errorColored, animatedStyle]}
      >
        <View style={styles.iconContainer}>
          <Icon type={type} color="#fff" />
        </View>

        <View style={[styles.textContainer, styles.textContainerWithIcon]}>
          {!!title && (
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={[styles.title, styles.errorColored]}
            >
              {title}
            </Text>
          )}
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={[styles.text, styles.errorColored]}
          >
            {text}
          </Text>
        </View>
      </Animtaed.View>
    </PanGestureHandler>
  );
};
