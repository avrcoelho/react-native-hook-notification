import React from 'react';
import Animated from 'react-native-reanimated';

import { View } from 'react-native';
import { NotificationTheme, NotificationType } from '../../types/Notification';
import { useController } from './useController';
import { styles } from './styles';

interface ProgressBarProps {
  id: string;
  delay: number;
  theme: NotificationTheme;
  type: NotificationType;
  isPaused: boolean;
  onRemove(id: string): void;
}

export const ProgressBar = ({
  id,
  onRemove,
  delay,
  theme,
  type,
  isPaused,
}: ProgressBarProps): JSX.Element | null => {
  const {
    containerTheme,
    onFinishProgress,
    onProgressAnimation,
    progressWidth,
    onGetProgressWidth,
  } = useController({
    id,
    onRemove,
    delay,
    theme,
    type,
    isPaused,
  });

  return (
    <View style={styles.container} onLayout={onGetProgressWidth}>
      {!!progressWidth && (
        <Animated.View
          style={[
            styles.progressContainer,
            styles[containerTheme as 'defaultcolored'],
          ]}
          entering={onProgressAnimation(progressWidth).withCallback(
            onFinishProgress,
          )}
        />
      )}
    </View>
  );
};
