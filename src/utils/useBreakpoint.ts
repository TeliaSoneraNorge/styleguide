import { throttle } from 'lodash';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const throttledHandleResize = throttle(() => {
      setWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', throttledHandleResize);
    return () => {
      window.removeEventListener('resize', throttledHandleResize);
      throttledHandleResize.cancel();
    };
  }, []);

  return width > breakpoints[breakpoint];
};
