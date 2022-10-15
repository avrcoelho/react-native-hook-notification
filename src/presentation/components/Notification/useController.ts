import { useCallback, useEffect, useRef } from 'react';
import {
  GestureHandlerGestureEvent,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from 'react-native-reanimated';

import { LayoutChangeEvent } from 'react-native';
import { useToggle } from '../../hooks/useToggle';
import { AnimationReturn } from '../../types/Animation';
import {
  NotificationDragDirection,
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
  NotificationType,
} from '../../types/Notification';
import { getAnimation } from '../../utils/getAnimation';
import { useNotificationWidth } from '../../hooks/useNotificationWidth';
import { useLimitToRemove } from '../../hooks/useLimitToRemove';
import { useIsMounted } from '../../hooks/useIsMounted';

type UseControllerHookProps = {
  dragDirection: NotificationDragDirection;
  type: NotificationType;
  theme: NotificationTheme;
  position: NotificationPosition;
  transition: NotificationTransition;
  delay: number;
  pauseOnPress: boolean;
  autoClose: boolean;
  draggable: boolean;
  closeOnPress: boolean;
  onPress?(): void;
  onRemove(): void;
};

type ContextData = {
  positionX: number;
  positionY: number;
};

type OnGestureEvent<T extends GestureHandlerGestureEvent> = (event: T) => void;

type UseControllerHook = (props: UseControllerHookProps) => {
  typeAndTheme: 'defaultcolored';
  onGestureEvent: OnGestureEvent<PanGestureHandlerGestureEvent>;
  animatedStyle:
    | {
        opacity: number;
        transform: {
          translateX: number;
        }[];
      }
    | object;
  animation: AnimationReturn;
  isPaused: boolean;
  width: number;
  onFinishAnimation(value: boolean): void;
  onGetNotificationHeight(event: LayoutChangeEvent): void;
  onPressNotification(): void;
};

const DELAY = 1000;

export const useController: UseControllerHook = ({
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
}) => {
  const typeAndTheme = `${type}${theme}` as 'defaultcolored';
  const transitionDirection = dragDirection.toUpperCase() as 'X' | 'Y';
  const positionOnScreen = useSharedValue(0);
  const [isPaused, toggleIsPaused] = useToggle(false);

  const onTogglePause = useCallback((): void => {
    'worklet';

    if (pauseOnPress) {
      runOnJS(toggleIsPaused)();
    }
  }, [pauseOnPress, toggleIsPaused]);

  const width = useNotificationWidth();
  const { limitToRemove, onGetNotificationHeight } = useLimitToRemove({
    dragDirection,
    width,
  });
  const onDirectionXRemover = useCallback(
    (pos: number): void => {
      'worklet';

      if (
        dragDirection === 'x' &&
        (pos > limitToRemove || pos < -limitToRemove)
      ) {
        runOnJS(onRemove)();
      }
    },
    [dragDirection, limitToRemove, onRemove],
  );

  const onDirectionYRemover = useCallback(
    (pos: number): void => {
      'worklet';

      if (
        dragDirection === 'y' &&
        (pos > limitToRemove || pos < -limitToRemove)
      ) {
        runOnJS(onRemove)();
      }
    },
    [dragDirection, limitToRemove, onRemove],
  );

  const onCanUpdatePosition = useCallback(
    (pos: number): boolean => {
      'worklet';

      if (!draggable) {
        return false;
      }
      if (dragDirection === 'x') {
        return true;
      }
      if (/top/.test(position) && pos > 0) {
        return false;
      }
      if (/bottom/.test(position) && pos < 0) {
        return false;
      }
      return true;
    },
    [dragDirection, position, draggable],
  );

  const canTogglePause = pauseOnPress && autoClose;
  const contextIndex = `position${transitionDirection}` as 'positionX';
  const translationIndex =
    `translation${transitionDirection}` as 'translationX';
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextData
  >(
    {
      onStart(_, context) {
        if (canTogglePause) {
          onTogglePause();
        }
        context[contextIndex] = positionOnScreen.value;
      },
      onActive(event, context) {
        const positionValue = context[contextIndex] + event[translationIndex];
        if (onCanUpdatePosition(positionValue)) {
          positionOnScreen.value = positionValue;
          onDirectionXRemover(positionValue);
          onDirectionYRemover(positionValue);
        }
      },
      onFinish() {
        if (canTogglePause) {
          onTogglePause();
        }
        positionOnScreen.value = withTiming(0);
      },
    },
    [
      onDirectionXRemover,
      onCanUpdatePosition,
      onDirectionYRemover,
      onCanUpdatePosition,
      onTogglePause,
      canTogglePause,
    ],
  );

  const [animationEnteringFinish, toggleAnimationEnteringFinish] =
    useToggle(false);
  const animatedStyle = useAnimatedStyle(() => {
    const translateIndex = `translate${transitionDirection}` as 'translateX';
    return animationEnteringFinish
      ? {
          opacity: interpolate(
            positionOnScreen.value,
            [-limitToRemove, 0, limitToRemove],
            [0, 1, 0],
          ),
          transform: [
            {
              [translateIndex]: positionOnScreen.value,
            },
          ],
        }
      : {};
  }, [animationEnteringFinish, transitionDirection, limitToRemove]);

  const onFinishAnimation = (isFinished: boolean): void => {
    'worklet';

    if (isFinished) {
      runOnJS(toggleAnimationEnteringFinish)();
    }
  };

  const delayDecrement = useRef(delay / DELAY);
  const timerRef = useRef<NodeJS.Timeout>();

  const isMounted = useIsMounted();
  const onExecuteTimer = useCallback((): void => {
    timerRef.current = setInterval(() => {
      delayDecrement.current -= 1;
      const canExecute = isMounted() && delayDecrement.current === 0;
      if (canExecute) {
        onRemove();
      }
    }, DELAY);
  }, [onRemove, isMounted]);

  useEffect(() => {
    const canExecute = autoClose && !isPaused;
    if (canExecute) {
      onExecuteTimer();
    } else {
      clearInterval(timerRef.current as NodeJS.Timeout);
    }

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [autoClose, isPaused, onExecuteTimer]);

  const onPressNotification = (): void => {
    onPress?.();
    if (closeOnPress) {
      onRemove();
    }
  };

  const animation = getAnimation({ position, transition });

  return {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    onFinishAnimation,
    onGetNotificationHeight,
    animation,
    isPaused,
    width,
    onPressNotification,
  };
};
