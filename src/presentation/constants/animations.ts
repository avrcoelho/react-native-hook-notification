import { Keyframe, Easing } from 'react-native-reanimated';
import { setAnimationPosition } from '../utils/setAnimationPosition';

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

export const slideRightEntering = new Keyframe({
  0: {
    transform: [
      {
        translateX: setAnimationPosition(),
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: 0,
      },
    ],
  },
}).duration(200);

export const slideRightExiting = new Keyframe({
  0: {
    transform: [
      {
        translateX: 0,
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: setAnimationPosition(),
      },
    ],
  },
}).duration(200);

export const slideLeftEntering = new Keyframe({
  0: {
    transform: [
      {
        translateX: -setAnimationPosition(),
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: 0,
      },
    ],
  },
}).duration(200);

export const slideLeftExiting = new Keyframe({
  0: {
    transform: [
      {
        translateX: 0,
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: -setAnimationPosition(),
      },
    ],
  },
}).duration(200);

export const slideBottomEntering = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: 100 * index,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: 0,
        },
      ],
    },
  }).duration(200);

export const slideBottomExiting = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: 0,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: 100 * index,
        },
      ],
    },
  }).duration(200);

export const slideTopEntering = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: -100 * index,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: 0,
        },
      ],
    },
  }).duration(200);

export const slideTopExiting = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: 0,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: -100 * index,
        },
      ],
    },
  }).duration(200);

export const bounceRightEntering = new Keyframe({
  0: {
    transform: [
      {
        translateX: setAnimationPosition(),
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: 0,
      },
    ],
    easing: Easing.bounce,
  },
}).duration(300);

export const bounceRightExiting = new Keyframe({
  0: {
    transform: [
      {
        translateX: 0,
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: setAnimationPosition(),
      },
    ],
  },
}).duration(300);

export const bounceLeftEntering = new Keyframe({
  0: {
    transform: [
      {
        translateX: -setAnimationPosition(),
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: 0,
      },
    ],
    easing: Easing.bounce,
  },
}).duration(300);

export const bounceLeftExiting = new Keyframe({
  0: {
    transform: [
      {
        translateX: 0,
      },
    ],
  },
  100: {
    transform: [
      {
        translateX: -setAnimationPosition(),
      },
    ],
  },
}).duration(300);

export const bounceBottomEntering = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: 100 * index,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: 0,
        },
      ],
      easing: Easing.bounce,
    },
  }).duration(300);

export const bounceBottomExiting = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: 0,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: 100 * index,
        },
      ],
    },
  }).duration(300);

export const bounceTopEntering = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: -100 * index,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: 0,
        },
      ],
      easing: Easing.bounce,
    },
  }).duration(300);

export const bounceTopExiting = (index: number): Keyframe =>
  new Keyframe({
    0: {
      transform: [
        {
          translateY: 0,
        },
      ],
    },
    100: {
      transform: [
        {
          translateY: -100 * index,
        },
      ],
    },
  }).duration(300);
