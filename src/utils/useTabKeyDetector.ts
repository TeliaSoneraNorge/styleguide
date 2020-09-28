import { useRef, useEffect } from 'react';

/**
 * Detect usage of tab keys and add class .user-is-tabbing to the ref.
 */

export function useTabKeyDetector() {
  const ref = useRef<any>(null);
  function mouseDownHandler() {
    if (ref.current) {
      ref.current.classList.remove('user-is-tabbing');
    }
    window.removeEventListener('mousedown', mouseDownHandler);
    window.addEventListener('keydown', tabKeyHandler);
  }

  function tabKeyHandler(e: KeyboardEvent) {
    if (e.keyCode === 9) {
      if (ref.current) {
        ref.current.classList.add('user-is-tabbing');
      }
      window.removeEventListener('keydown', tabKeyHandler);
      window.addEventListener('mousedown', mouseDownHandler);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', tabKeyHandler);
    return () => window.removeEventListener('keydown', tabKeyHandler);
  }, []);

  return ref;
}
