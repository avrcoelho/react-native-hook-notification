import { Keyframe, Easing } from 'react-native-reanimated';

export const fadeEntering = new Keyframe({
  0: {
    opacity: 0,
  },
  100: {
    opacity: 1,
  },
});

export const fadeExiting = new Keyframe({
  0: {
    opacity: 1,
  },
  100: {
    opacity: 0,
  },
});

export const zoomEntering = new Keyframe({
  0: {
    opacity: 0,
    transform: [
      {
        scale: 0.3,
      },
    ],
  },
  100: {
    opacity: 1,
    transform: [
      {
        scale: 1,
      },
    ],
  },
}).duration(200);

export const zoomExiting = new Keyframe({
  0: {
    opacity: 1,
    transform: [
      {
        scale: 1,
      },
    ],
  },
  100: {
    opacity: 0,
    transform: [
      {
        scale: 0.3,
      },
    ],
  },
}).duration(200);

export const flipEntering = new Keyframe({
  0: {
    opacity: 0.2,
    transform: [
      {
        rotateX: '-90deg',
      },
      {
        skewX: '-20deg',
      },
    ],
    easing: Easing.bounce,
  },
  100: {
    opacity: 1,
    transform: [
      {
        rotateX: '0deg',
      },
      {
        skewX: '0deg',
      },
    ],
    easing: Easing.bounce,
  },
}).duration(600);

export const flipExiting = new Keyframe({
  0: {
    opacity: 0.2,
    transform: [
      {
        rotateX: '-90',
      },
      {
        skewX: '-20',
      },
    ],
  },
  100: {
    opacity: 1,
    transform: [
      {
        rotateX: '0',
      },
      {
        skewX: '0',
      },
    ],
  },
}).duration(600);
