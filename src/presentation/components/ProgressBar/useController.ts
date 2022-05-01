import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Keyframe, runOnJS } from 'react-native-reanimated';

import { NotificationTheme, NotificationType } from '../../types/Notification';

type UseControllerHookProps = {
  delay: number;
  theme: NotificationTheme;
  type: NotificationType;
  onRemove(): void;
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

  const onFinishProgress = useCallback(
    (isFinished: boolean) => {
      'worklet';

      if (isFinished) {
        runOnJS(onRemove)();
      }
    },
    [onRemove],
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
