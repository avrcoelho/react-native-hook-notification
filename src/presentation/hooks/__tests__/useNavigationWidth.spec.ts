import { renderHook } from '@testing-library/react-hooks';
import RN from 'react-native';

import { useNotificationWidth } from '../useNotificationWidth';

let mockOrientation = 'landscape';
jest.mock('../useOrientation', () => ({
  useOrientation: () => mockOrientation,
}));

describe('useNotificationWidth hook', () => {
  it('should be able to return landscape default size', () => {
    jest.spyOn(RN, 'useWindowDimensions').mockReturnValueOnce({
      width: 600,
      height: 50,
      fontScale: 1,
      scale: 1,
    });
    const { result } = renderHook(useNotificationWidth);

    expect(result.current).toBe(460);
  });

  it('should be able to return responsive size', () => {
    mockOrientation = 'portrait';
    jest.spyOn(RN, 'useWindowDimensions').mockReturnValueOnce({
      width: 100,
      height: 150,
      fontScale: 1,
      scale: 1,
    });
    const { result } = renderHook(useNotificationWidth);

    expect(result.current).toBe(80);
  });
});
