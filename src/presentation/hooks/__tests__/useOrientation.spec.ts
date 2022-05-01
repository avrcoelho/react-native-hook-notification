import { renderHook } from '@testing-library/react-hooks';
import RN from 'react-native';

import { useOrientation } from '../useOrientation';

describe('useOrientation hook', () => {
  it('should be able to return landscape orientation', () => {
    jest.spyOn(RN, 'useWindowDimensions').mockReturnValueOnce({
      width: 100,
      height: 50,
      fontScale: 1,
      scale: 1,
    });
    const { result } = renderHook(useOrientation);

    expect(result.current).toBe('landscape');
  });

  it('should be able to return portrait orientation', () => {
    jest.spyOn(RN, 'useWindowDimensions').mockReturnValueOnce({
      width: 100,
      height: 150,
      fontScale: 1,
      scale: 1,
    });
    const { result } = renderHook(useOrientation);

    expect(result.current).toBe('portrait');
  });
});
