import React from 'react';
import { View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animtaed, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
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
  const onGestureEvent = useAnimatedGestureHandler({
    onStart() {},
    onActive() {},
    onEnd() {},
  });
  const opacity = useSharedValue(1);
  const positionX = useSharedValue(1);
  const positionY = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        translateX: positionX.value,
      },
      {
        translateY: positionY.value,
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
