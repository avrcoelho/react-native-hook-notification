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
  const limitToRemove = width - 80;
  const posX = useSharedValue(0);
  const posY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: any) {
      context.posX = posX.value;
      context.posY = posY.value;
    },
    onActive(event, context: any) {
      // if (event.translationY <= 0) return;
      posX.value = context.posX + event.translationX;
      posY.value = context.posY + event.translationY;
    },
    onEnd() {
      posX.value = withTiming(0);
      posY.value = withTiming(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      posX.value,
      [-limitToRemove, 0, limitToRemove],
      [0, 1, 0],
    ),
    transform: [
      {
        translateX: posX.value,
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
