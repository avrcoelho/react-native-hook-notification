import {
  bounceBottomEntering,
  bounceBottomExiting,
  bounceLeftEntering,
  bounceLeftExiting,
  bounceRightEntering,
  bounceRightExiting,
  bounceTopEntering,
  bounceTopExiting,
  fadeEntering,
  fadeExiting,
  flipEntering,
  flipExiting,
  slideBottomEntering,
  slideBottomExiting,
  slideLeftEntering,
  slideLeftExiting,
  slideRightEntering,
  slideRightExiting,
  slideTopEntering,
  slideTopExiting,
  zoomEntering,
  zoomExiting,
} from '../constants/animations';
import { AnimationReturn } from '../types/Animation';
import {
  NotificationPosition,
  NotificationTransition,
} from '../types/Notification';

type GetNotificationProps = {
  transition: NotificationTransition;
  position: NotificationPosition;
  amount: number;
};

export const getAnimation = ({
  position,
  transition,
  amount,
}: GetNotificationProps): AnimationReturn => {
  const animations = {
    bounce: {
      'top-right': {
        enter: bounceRightEntering,
        exit: bounceRightExiting,
      },
      'top-center': {
        enter: bounceTopEntering(amount),
        exit: bounceTopExiting(amount),
      },
      'top-left': {
        enter: bounceLeftEntering,
        exit: bounceLeftExiting,
      },
      'bottom-right': {
        enter: bounceRightEntering,
        exit: bounceRightExiting,
      },
      'bottom-center': {
        enter: bounceBottomEntering(amount),
        exit: bounceBottomExiting(amount),
      },
      'bottom-left': {
        enter: bounceLeftEntering,
        exit: bounceLeftExiting,
      },
    },
    slide: {
      'top-right': {
        enter: slideRightEntering,
        exit: slideRightExiting,
      },
      'top-center': {
        enter: slideTopEntering(amount),
        exit: slideTopExiting(amount),
      },
      'top-left': {
        enter: slideLeftEntering,
        exit: slideLeftExiting,
      },
      'bottom-right': {
        enter: slideRightEntering,
        exit: slideRightExiting,
      },
      'bottom-center': {
        enter: slideBottomEntering(amount),
        exit: slideBottomExiting(amount),
      },
      'bottom-left': {
        enter: slideLeftEntering,
        exit: slideLeftExiting,
      },
    },
    fade: {
      'top-right': {
        enter: fadeEntering,
        exit: fadeExiting,
      },
      'top-center': {
        enter: fadeEntering,
        exit: fadeExiting,
      },
      'top-left': {
        enter: fadeEntering,
        exit: fadeExiting,
      },
      'bottom-right': {
        enter: fadeEntering,
        exit: fadeExiting,
      },
      'bottom-center': {
        enter: fadeEntering,
        exit: fadeExiting,
      },
      'bottom-left': {
        enter: fadeEntering,
        exit: fadeExiting,
      },
    },
    flip: {
      'top-right': {
        enter: flipEntering,
        exit: flipExiting,
      },
      'top-center': {
        enter: flipEntering,
        exit: flipExiting,
      },
      'top-left': {
        enter: flipEntering,
        exit: flipExiting,
      },
      'bottom-right': {
        enter: flipEntering,
        exit: flipExiting,
      },
      'bottom-center': {
        enter: flipEntering,
        exit: flipExiting,
      },
      'bottom-left': {
        enter: flipEntering,
        exit: flipExiting,
      },
    },
    zoom: {
      'top-right': {
        enter: zoomEntering,
        exit: zoomExiting,
      },
      'top-center': {
        enter: zoomEntering,
        exit: zoomExiting,
      },
      'top-left': {
        enter: zoomEntering,
        exit: zoomExiting,
      },
      'bottom-right': {
        enter: zoomEntering,
        exit: zoomExiting,
      },
      'bottom-center': {
        enter: zoomEntering,
        exit: zoomExiting,
      },
      'bottom-left': {
        enter: zoomEntering,
        exit: zoomExiting,
      },
    },
  };
  return animations[transition][position];
};
