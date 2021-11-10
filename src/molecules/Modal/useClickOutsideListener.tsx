import { useEffect } from 'react';

interface Params {
  setOpen: (open: boolean) => void;
  open: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useClickOutsideListener = (params: Params) => {
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (params.containerRef?.current?.firstChild?.contains(e.target as Node)) {
        return;
      }
      params.setOpen(false);
    };
    if (params.open) {
      document.addEventListener('mousedown', clickOutside);
    } else {
      document.removeEventListener('mousedown', clickOutside);
    }
  }, [params.open]);
};
