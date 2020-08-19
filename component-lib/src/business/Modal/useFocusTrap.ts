import React, { useRef, useEffect } from 'react';

export const useFocusTrap = () => {
  const container = useRef<HTMLDivElement>(null);

  // get all elements within the containter that can receive focus
  const focusable = container.current
    ? container.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    : undefined;
  const firstFocusableElement = focusable ? focusable[0] : undefined;
  const lastFocusableElement = focusable ? focusable[focusable.length - 1] : undefined;

  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      const tabKeyPressed = e.key === 'Tab' || e.keyCode === 9;
      if (!tabKeyPressed) return;

      if (e.shiftKey) {
        if (lastFocusableElement && document.activeElement === firstFocusableElement) {
          e.preventDefault();
          return lastFocusableElement.focus();
        }
      } else {
        if (firstFocusableElement && document.activeElement === lastFocusableElement) {
          e.preventDefault();
          return firstFocusableElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [container.current]);

  return { container };
};
