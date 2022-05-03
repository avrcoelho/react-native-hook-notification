import { useWindowDimensions } from 'react-native';

import { useOrientation } from './useOrientation';

const maxWidth = 520;

export const useNotificationWidth = (): number => {
  const { width } = useWindowDimensions();
  const orientation = useOrientation();
  const newWidth = width > maxWidth ? maxWidth : width;
  const iphoneXStatusBar = orientation === 'landscape' ? 64 : 0;
  return newWidth - iphoneXStatusBar - 32;
};
