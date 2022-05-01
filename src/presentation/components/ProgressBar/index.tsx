import React from 'react';
import Animated from 'react-native-reanimated';

import { View } from 'react-native';
import { NotificationTheme, NotificationType } from '../../types/Notification';
import { useController } from './useController';
import { styles } from './styles';

interface ProgressBarProps {
  delay: number;
  theme: NotificationTheme;
  type: NotificationType;
  onRemove(): void;
}

export const ProgressBar = ({
  onRemove,
  delay,
  theme,
  type,
}: ProgressBarProps): JSX.Element | null => {
  const {
    containerTheme,
    onFinishProgress,
    onProgressAnimation,
    progressWidth,
    onGetProgressWidth,
  } = useController({
    onRemove,
    delay,
    theme,
    type,
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
