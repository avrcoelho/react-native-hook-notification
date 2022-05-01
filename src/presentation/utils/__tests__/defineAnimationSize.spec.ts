import { Dimensions } from 'react-native';

import { defineAnimationSize } from '../defineAnimationSize';

describe('Define animation size', () => {
  it('should be able to screen > 640', () => {
    jest.spyOn(Dimensions, 'get').mockReturnValueOnce({
      width: 1000,
      fontScale: 777,
      height: 777,
      scale: 777,
    });
    const size = defineAnimationSize();

    expect(size).toBe(380);
  });

  it('should be able to screen < 640', () => {
    jest.spyOn(Dimensions, 'get').mockReturnValueOnce({
      width: 500,
      fontScale: 777,
      height: 777,
      scale: 777,
    });
    const size = defineAnimationSize();

    expect(size).toBe(500);
  });
});
