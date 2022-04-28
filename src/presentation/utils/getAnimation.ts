import {
  BounceInDown,
  BounceInLeft,
  BounceInRight,
  BounceInUp,
  BounceOutDown,
  BounceOutLeft,
  BounceOutRight,
  BounceOutUp,
  FadeIn,
  FadeOut,
  FlipInEasyX,
  FlipOutEasyX,
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';

import { AnimationReturn } from '../types/Animation';
import {
  NotificationPosition,
  NotificationTransition,
} from '../types/Notification';

type GetNotificationProps = {
  transition: NotificationTransition;
  position: NotificationPosition;
};

export const getAnimation = ({
  position,
  transition,
}: GetNotificationProps): AnimationReturn => {
  const animations = {
    bounce: {
      'top-right': {
        enter: BounceInRight,
        exit: SlideOutRight,
      },
      'top-center': {
        enter: BounceInUp,
        exit: SlideOutUp,
      },
      'top-left': {
        enter: BounceInLeft,
        exit: SlideOutLeft,
      },
      'bottom-right': {
        enter: BounceInRight,
        exit: SlideOutRight,
      },
      'bottom-center': {
        enter: BounceInDown,
        exit: SlideOutDown,
      },
      'bottom-left': {
        enter: BounceInLeft,
        exit: SlideOutLeft,
      },
    },
    slide: {
      'top-right': {
        enter: SlideInRight,
        exit: SlideOutRight,
      },
      'top-center': {
        enter: SlideInUp,
        exit: SlideOutUp,
      },
      'top-left': {
        enter: SlideInLeft,
        exit: SlideOutLeft,
      },
      'bottom-right': {
        enter: SlideInRight,
        exit: SlideOutRight,
      },
      'bottom-center': {
        enter: SlideInDown,
        exit: SlideOutDown,
      },
      'bottom-left': {
        enter: SlideInLeft,
        exit: SlideOutLeft,
      },
    },
    fade: {
      'top-right': {
        enter: FadeIn,
        exit: FadeOut,
      },
      'top-center': {
        enter: FadeIn,
        exit: FadeOut,
      },
      'top-left': {
        enter: FadeIn,
        exit: FadeOut,
      },
      'bottom-right': {
        enter: FadeIn,
        exit: FadeOut,
      },
      'bottom-center': {
        enter: FadeIn,
        exit: FadeOut,
      },
      'bottom-left': {
        enter: FadeIn,
        exit: FadeOut,
      },
    },
    flip: {
      'top-right': {
        enter: FlipInEasyX,
        exit: FlipOutEasyX,
      },
      'top-center': {
        enter: FlipInEasyX,
        exit: FlipOutEasyX,
      },
      'top-left': {
        enter: FlipInEasyX,
        exit: FlipOutEasyX,
      },
      'bottom-right': {
        enter: FlipInEasyX,
        exit: FlipOutEasyX,
      },
      'bottom-center': {
        enter: FlipInEasyX,
        exit: FlipOutEasyX,
      },
      'bottom-left': {
        enter: FlipInEasyX,
        exit: FlipOutEasyX,
      },
    },
    zoom: {
      'top-right': {
        enter: ZoomIn,
        exit: ZoomOut,
      },
      'top-center': {
        enter: ZoomIn,
        exit: ZoomOut,
      },
      'top-left': {
        enter: ZoomIn,
        exit: ZoomOut,
      },
      'bottom-right': {
        enter: ZoomIn,
        exit: ZoomOut,
      },
      'bottom-center': {
        enter: ZoomIn,
        exit: ZoomOut,
      },
      'bottom-left': {
        enter: ZoomIn,
        exit: ZoomOut,
      },
    },
  };
  return animations[transition][position];
};
