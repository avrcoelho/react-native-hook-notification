import { useCallback, useEffect, useRef } from 'react';

export const useIsMounted = (): (() => boolean) => {
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => {
      isMount.current = false;
    };
  });

  return useCallback((): boolean => isMount.current, []);
};
