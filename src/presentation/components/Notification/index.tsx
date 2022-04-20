import React from 'react';
import { View, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animtaed, { useAnimatedGestureHandler } from 'react-native-reanimated';

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

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animtaed.View style={[styles.container, styles.errorColored]}>
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
