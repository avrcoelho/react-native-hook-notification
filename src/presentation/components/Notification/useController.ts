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
} from 'react-native-reanimated';

import {
  NotificationDragDirection,
  NotificationTheme,
  NotificationType,
} from '../../types/Notification';

type UseControllerHookProps = {
  title?: string;
  dragDirection: NotificationDragDirection;
  type: NotificationType;
  theme: NotificationTheme;
  showIcon: boolean;
};

type ContextData = {
  positionX: number;
  positionY: number;
};

type OnGestureEvent<T extends GestureHandlerGestureEvent> = (event: T) => void;

type UseControllerHook = (props: UseControllerHookProps) => {
  typeAndTheme: 'defaultcolored';
  onGestureEvent: OnGestureEvent<PanGestureHandlerGestureEvent>;
  animatedStyle: {
    opacity: number;
    transform: {
      translateX: number;
    }[];
  };
  withIcon: boolean;
};

export const useController: UseControllerHook = ({
  dragDirection,
  theme,
  type,
  title,
  showIcon,
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
  const animatedStyle = useAnimatedStyle(
    () => ({
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
    }),
    [],
  );

  const withIcon = type === 'default' ? false : showIcon;

  return {
    animatedStyle,
    onGestureEvent,
    typeAndTheme,
    withIcon,
  };
};
