import { throttle } from 'lodash';
import { useState, useEffect } from 'react';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl';
const breakpoints: { [key in Breakpoints]: number } = {
  sm: 640,
  md: 840,
  lg: 1024,
  xl: 1280,
};

export const useBreakpoint = (breakpoint: Breakpoints): boolean => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const throttledHandleResize = throttle(handleResize, 100);
    window.addEventListener('resize', throttledHandleResize);
    return () => {
      window.removeEventListener('resize', throttledHandleResize);
    };
  }, []);

  return width > breakpoints[breakpoint];
};
