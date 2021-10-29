import { debounce, throttle } from 'lodash';
import { useState, useEffect, useCallback, useRef } from 'react';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
const breakpoints: { [key in Breakpoints]: number } = {
  sm: 640,
  md: 840,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
};

export const useBreakpoint = (breakpoint: Breakpoints): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  const isCancelled = useRef(false);

  const throttledHandleResize = useCallback(
    throttle(() => {
      !isCancelled.current && setWidth(window.innerWidth);
    }, 100),
    [setWidth]
  );

  useEffect(() => {
    window.addEventListener('resize', throttledHandleResize);
    return () => {
      isCancelled.current = true;
      window.removeEventListener('resize', throttledHandleResize);
    };
  }, [throttledHandleResize, isCancelled]);

  return width > breakpoints[breakpoint];
};
