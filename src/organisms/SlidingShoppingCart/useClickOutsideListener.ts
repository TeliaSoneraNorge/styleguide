import { RefObject, useEffect } from 'react';

export const useClickOutsideListener = (params: {
  open: boolean;
  close: () => void;
  ref: RefObject<HTMLDivElement> | null;
  buttonRef?: RefObject<HTMLButtonElement> | null;
}) => {
  const { open, close, ref, buttonRef } = params;

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      const mobileOutside = e.target && buttonRef?.current && !buttonRef.current.contains((e.target as any) as Node);
      const targetIsOutside = e.target && ref?.current && !ref.current.contains((e.target as any) as Node);
      if (open && (targetIsOutside || mobileOutside)) {
        close();
      }
    };
    window.addEventListener('click', handleClose);

    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [open, ref, buttonRef]);
};
