import { useCallback, useEffect, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
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

type UseControllerHookProps = {
  title?: string;
  dragDirection: NotificationDragDirection;
  type: NotificationType;
  theme: NotificationTheme;
  showIcon: boolean;
  amount: number;
  position: NotificationPosition;
  transition: NotificationTransition;
  delay: number;
  pauseOnPressable: boolean;
  autoClose: boolean;
  draggable: boolean;
  id: string;
  onRemove(id: string): void;
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
  withIcon: boolean;
  animation: AnimationReturn;
  onFinishAnimation(value: boolean): void;
};

const DELAY = 1000;
let TIMER: NodeJS.Timeout;

export const useController: UseControllerHook = ({
  dragDirection,
  theme,
  type,
  title,
  showIcon,
  amount,
  transition,
  position,
  autoClose,
  delay,
  onRemove,
  id,
  pauseOnPressable,
  draggable,
}) => {
  const { width } = useWindowDimensions();
  const onGetLimitToRemove = (): number => {
    const limits = {
      x: width - 95,
      y: title ? 95 : 60,
    };
    return limits[dragDirection];
  };
  const limitToRemove = onGetLimitToRemove();
  const typeAndTheme = `${type}${theme}` as 'defaultcolored';
  const transitionDirection = dragDirection.toUpperCase() as 'X' | 'Y';
  const positionOnScreen = useSharedValue(0);
  const [isPaused, toggleIsPaused] = useToggle(false);

  const onTogglePause = useCallback((): void => {
    'worklet';

    if (pauseOnPressable) {
      runOnJS(toggleIsPaused)();
    }
  }, [pauseOnPressable, toggleIsPaused]);

  const onRemoveNotification = useCallback((): void => {
    onRemove(id);
  }, [id, onRemove]);

  const onDirectionXRemover = useCallback(
    (pos: number): void => {
      'worklet';

      if (
        dragDirection === 'x' &&
        (pos > limitToRemove || pos < -limitToRemove)
      ) {
        runOnJS(onRemoveNotification)();
      }
    },
    [dragDirection, limitToRemove, onRemoveNotification],
  );

  const onDirectionYRemover = useCallback(
    (pos: number): void => {
      'worklet';

      if (
        dragDirection === 'y' &&
        (pos > limitToRemove || pos < -limitToRemove)
      ) {
        runOnJS(onRemoveNotification)();
      }
    },
    [dragDirection, limitToRemove, onRemoveNotification],
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

  const canTogglePause = pauseOnPressable && autoClose;
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextData
  >(
    {
      onStart(_, context) {
        if (canTogglePause) {
          onTogglePause();
        }
        context[`position${transitionDirection}`] = positionOnScreen.value;
      },
      onActive(event, context) {
        const positionValue =
          context[`position${transitionDirection}`] +
          event[`translation${transitionDirection}`];
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
  const animatedStyle = useAnimatedStyle(
    () =>
      animationEnteringFinish
        ? {
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
          }
        : {},
    [animationEnteringFinish],
  );

  const onFinishAnimation = useCallback(
    (isFinished: boolean): void => {
      'worklet';

      if (isFinished) {
        runOnJS(toggleAnimationEnteringFinish)();
      }
    },
    [toggleAnimationEnteringFinish],
  );

  const delayDecrement = useRef(delay / DELAY);
  useEffect(() => {
    const cannotRun = !autoClose || isPaused;
    if (cannotRun) {
      clearInterval(TIMER);
      return () => null;
    }
    TIMER = setInterval(() => {
      delayDecrement.current -= 1;
      if (delayDecrement.current === 0) {
        onRemove(id);
      }
    }, DELAY);

    return () => clearInterval(TIMER);
  }, [autoClose, delay, id, isPaused, onRemove]);

  const animation = getAnimation({ amount, position, transition });
  const withIcon = type === 'default' ? false : showIcon;

  return {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    withIcon,
    onFinishAnimation,
    animation,
  };
};
