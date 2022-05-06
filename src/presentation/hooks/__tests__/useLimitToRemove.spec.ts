import { renderHook } from '@testing-library/react-hooks';
import { LayoutChangeEvent } from 'react-native';

import { useLimitToRemove } from '../useLimitToRemove';

const mockOrientation = 'landscape';
jest.mock('../useOrientation', () => ({
  useOrientation: () => mockOrientation,
}));

describe('useLimitToRemove hook', () => {
  const eventData = {
    nativeEvent: {
      layout: {
        height: 50,
      },
    },
  } as LayoutChangeEvent;

  it('should be able to return Y limit x', () => {
    const { result } = renderHook(useLimitToRemove, {
      initialProps: {
        dragDirection: 'y',
        width: 100,
      },
    });

    result.current.onGetNotificationHeight(eventData);

    expect(result.current.limitToRemove).toBe(35);
  });

  it('should be able to return X limit', () => {
    const { result } = renderHook(useLimitToRemove, {
      initialProps: {
        dragDirection: 'x',
        width: 100,
      },
    });

    result.current.onGetNotificationHeight(eventData);

    expect(result.current.limitToRemove).toBe(70);
  });
});
