import { RefObject, useEffect } from 'react';

export const useClickOutsideListener = (params: {
  open: boolean;
  close: () => void;
  ref: RefObject<HTMLDivElement> | null;
}) => {
  const { open, close, ref } = params;

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      const targetIsOutside = e.target && ref?.current && !ref.current.contains((e.target as any) as Node);

      if (open && targetIsOutside) {
        close();
      }
    };
    window.addEventListener('click', handleClose);

    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [open, ref]);
};
