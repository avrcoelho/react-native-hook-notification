import { useCallback } from 'react';
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

export const useController: UseControllerHook = ({
  dragDirection,
  theme,
  type,
  title,
  showIcon,
  amount,
  transition,
  position,
}) => {
  const { width } = useWindowDimensions();
  const onGetLimitToRemove = (): number => {
    const limits = {
      x: width - 80,
      y: title ? 80 : 60,
    };
    return limits[dragDirection];
  };

  const limitToRemove = onGetLimitToRemove();
  const typeAndTheme = `${type}${theme}` as 'defaultcolored';
  const transitionDirection = dragDirection.toUpperCase() as 'X' | 'Y';
  const positionOnScreen = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextData
  >({
    onStart(_, context) {
      context[`position${transitionDirection}`] = positionOnScreen.value;
    },
    onActive(event, context) {
      positionOnScreen.value =
        context[`position${transitionDirection}`] +
        event[`translation${transitionDirection}`];
    },
    onEnd() {
      positionOnScreen.value = withTiming(0);
    },
  });

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

  const withIcon = type === 'default' ? false : showIcon;

  const onFinishAnimation = useCallback(
    (isFinished: boolean) => {
      'worklet';

      if (isFinished) {
        runOnJS(toggleAnimationEnteringFinish)();
      }
    },
    [toggleAnimationEnteringFinish],
  );

  const animation = getAnimation({ amount, position, transition });

  return {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    withIcon,
    onFinishAnimation,
    animation,
  };
};
