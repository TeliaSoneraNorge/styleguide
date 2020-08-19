import { useEffect } from 'react';

interface Params {
  onEscape: () => void;
}

export const useEscapeListener = (params: Params) => {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        params.onEscape();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);
};
