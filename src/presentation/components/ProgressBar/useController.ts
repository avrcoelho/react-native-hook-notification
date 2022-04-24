import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Keyframe, runOnJS } from 'react-native-reanimated';

import { NotificationTheme, NotificationType } from '../../types/Notification';

type UseControllerHookProps = {
  id: string;
  delay: number;
  theme: NotificationTheme;
  type: NotificationType;
  isPaused: boolean;
  autoClose: boolean;
  onRemove(id: string): void;
};

type UseControllerHook = (props: UseControllerHookProps) => {
  containerTheme: string;
  progressWidth: number;
  onProgressAnimation(width: number): Keyframe;
  onFinishProgress(isFinished: boolean): void;
  onGetProgressWidth(event: LayoutChangeEvent): void;
};

export const useController: UseControllerHook = ({
  type,
  theme,
  delay,
  onRemove,
  id,
}) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const containerTheme = `${type}${theme}`;

  const onProgressAnimation = useCallback(
    (width: number) =>
      new Keyframe({
        0: {
          width,
        },
        100: {
          width: 0,
        },
      }).duration(delay),
    [delay],
  );

  const onRemoveNotification = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  const onFinishProgress = useCallback(
    (isFinished: boolean) => {
      'worklet';

      if (isFinished) {
        runOnJS(onRemoveNotification)();
      }
    },
    [onRemoveNotification],
  );

  const onGetProgressWidth = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setProgressWidth(width);
  }, []);

  return {
    containerTheme,
    progressWidth,
    onProgressAnimation,
    onFinishProgress,
    onGetProgressWidth,
  };
};
