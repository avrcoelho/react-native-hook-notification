import { act, renderHook } from '@testing-library/react-hooks';

import { useController } from '../useController';
import {
  NotificationDragDirection,
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
  NotificationType,
} from '../../../types/Notification';

describe('Notification hook controller', () => {
  const initialProps = {
    dragDirection: 'x' as NotificationDragDirection,
    type: 'success' as NotificationType,
    theme: 'colored' as NotificationTheme,
    position: 'bottom-center' as NotificationPosition,
    transition: 'slide' as NotificationTransition,
    delay: 5000,
    pauseOnPress: true,
    autoClose: true,
    draggable: true,
    closeOnPress: true,
    onRemove: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not be able to call runOnJS function when animation fisnished', () => {
    const { result } = renderHook(useController, {
      initialProps,
    });

    act(() => {
      result.current.onFinishAnimation(false);
    });

    expect(result.current.animatedStyle).not.toEqual({});
  });

  it('should be able to call runOnJS function when animation fisnished', () => {
    const { result } = renderHook(useController, {
      initialProps,
    });

    act(() => {
      result.current.onFinishAnimation(true);
    });

    expect(result.current.animatedStyle).not.toEqual({});
  });

  it('should be able to close on press', () => {
    const { result } = renderHook(useController, {
      initialProps,
    });

    result.current.onPressNotification();

    expect(initialProps.onRemove).toBeCalled();
  });

  it('should not be able to close on press', () => {
    const { result } = renderHook(useController, {
      initialProps: {
        ...initialProps,
        onPress: jest.fn(),
        closeOnPress: false,
      },
    });

    result.current.onPressNotification();

    expect(initialProps.onRemove).not.toBeCalled();
  });
});
