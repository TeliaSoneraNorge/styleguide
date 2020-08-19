import { useRef, useEffect } from 'react';

const getFirstFocus = (elementList: NodeListOf<HTMLElement> | HTMLElement[]) => {
  let first: HTMLElement;
  for (let i = 0; i < elementList.length; i++) {
    if (!elementList[i]['disabled']) {
      first = elementList[i];
      break;
    }
  }
  return first;
};

const getLastFocus = (elementList: NodeListOf<HTMLElement>) => {
  let reverse: HTMLElement[] = [];
  elementList.forEach(elemnt => {
    reverse = [elemnt, ...reverse];
  });
  return getFirstFocus(reverse);
};

/**
 * This hook captures the focus within a container (now used only for Modal).
 * It handle disabled elements any where in the tab order,
 * and tabs to first element after last.
 * Using shift it tabs to last element after first.
 */
export const useFocusTrap = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const focusable = container.current
      ? container.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      : undefined;

    const firstFocusableElement = getFirstFocus(focusable);
    const lastFocusableElement = getLastFocus(focusable);

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
