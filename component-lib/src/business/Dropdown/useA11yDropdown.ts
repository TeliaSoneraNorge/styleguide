import { useEffect } from 'react';
import { useDropdownContext } from './index';

export const useA11yDropdown = () => {
  const {
    dropdownRef,
    menuRef,
    setMenuOpen,
    setHighlightIndex,
    highlightIndex,
    open,
    maxHighlightIndex,
  } = useDropdownContext();

  useEffect(() => {
    const closeMenu = (e: MouseEvent | FocusEvent) => {
      if (open && e.target && dropdownRef.current && !dropdownRef.current.contains((e.target as any) as Node)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', closeMenu);
    window.addEventListener('focusin', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('focusin', closeMenu);
    };
  }, [open, dropdownRef]);

  useEffect(() => {
    const navigate = (e: KeyboardEvent) => {
      if (open && e.target && menuRef.current && menuRef.current.contains((document.activeElement as any) as Node)) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (highlightIndex === maxHighlightIndex) {
            setHighlightIndex(0);
          } else {
            setHighlightIndex(highlightIndex + 1);
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (highlightIndex === 0) {
            setHighlightIndex(maxHighlightIndex);
          } else {
            setHighlightIndex(highlightIndex - 1);
          }
        }
      }
    };
    window.addEventListener('keydown', navigate);
    return () => {
      window.removeEventListener('keydown', navigate);
    };
  }, [open, highlightIndex]);

  useEffect(() => {
    if (!open) {
      setHighlightIndex(-1);
    }
  }, [open]);
};
