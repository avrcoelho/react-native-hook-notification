import { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

import { NotificationDragDirection } from '../types/Notification';

type UseLimitToRemoveProps = {
  dragDirection: NotificationDragDirection;
  width: number;
};

type UseLimitToRemoveHook = (props: UseLimitToRemoveProps) => {
  limitToRemove: number;
  onGetNotificationHeight(event: LayoutChangeEvent): void;
};

const PERCENT = 0.3;

export const useLimitToRemove: UseLimitToRemoveHook = ({
  dragDirection,
  width,
}) => {
  const [widthToRemove, setWidthToRemove] = useState(0);

  useEffect(() => {
    const limit = width - width * PERCENT;
    setWidthToRemove(limit);
  }, [width]);

  const [heightToRemove, setHeightToRemove] = useState(0);
  const onGetNotificationHeight = useCallback(
    (event: LayoutChangeEvent): void => {
      const { height: elementHeight } = event.nativeEvent.layout;
      const limit = elementHeight - elementHeight * PERCENT;
      setHeightToRemove(limit);
    },
    [],
  );

  const onGetLimitToRemove = (dir: NotificationDragDirection): number => {
    const limits = {
      x: widthToRemove,
      y: heightToRemove,
    };
    return limits[dir];
  };

  const limitToRemove = onGetLimitToRemove(dragDirection);

  return {
    limitToRemove,
    onGetNotificationHeight,
  };
};
