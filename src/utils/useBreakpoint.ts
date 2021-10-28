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

  let isMounted = true;
  useEffect(() => {
    const handleResize = () => {
      isMounted && setWidth(window.innerWidth);
    };

    const throttledHandleResize = throttle(handleResize, 100);
    window.addEventListener('resize', throttledHandleResize);
    return () => {
      isMounted = false;
      window.removeEventListener('resize', throttledHandleResize);
    };
  }, []);

  return width > breakpoints[breakpoint];
};
