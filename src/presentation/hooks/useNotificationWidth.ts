import { useWindowDimensions } from 'react-native';

import { useOrientation } from './useOrientation';

export const useNotificationWidth = (): number => {
  const { width } = useWindowDimensions();
  const orientation = useOrientation();
  const newWidth = width > 720 ? 480 : width;
  const iphoneXStatusBar = orientation === 'landscape' ? 64 : 0;
  return newWidth - iphoneXStatusBar - 32;
};
