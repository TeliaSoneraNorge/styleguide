import { RefObject, useEffect } from 'react';

export const useClickOutsideListener = (params: {
  open: boolean;
  close: () => void;
  ref: RefObject<HTMLDivElement> | null;
}) => {
  const { open, close, ref } = params;
  /**
   * Close if click or focus outside
   */
  useEffect(() => {
    const closeMenu = (e: MouseEvent | FocusEvent) => {
      const targetIsOutside = e.target && ref && ref.current && !ref.current.contains((e.target as any) as Node);

      if (open && targetIsOutside) {
        close();
      }
    };
    window.addEventListener('click', closeMenu);
    window.addEventListener('focusin', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('focusin', closeMenu);
    };
  }, [open, ref]);
};
