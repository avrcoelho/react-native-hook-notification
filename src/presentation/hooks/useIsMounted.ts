import { useCallback, useEffect, useRef } from 'react';

type Return = () => boolean;

export const useIsMounted = (): Return => {
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;

    return () => {
      isMount.current = false;
    };
  });

  return useCallback((): boolean => isMount.current, []);
};
