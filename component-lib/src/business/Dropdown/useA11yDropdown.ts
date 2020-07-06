import { useEffect } from 'react';
import { useDropdownContext } from './index';

export const useA11yDropdown = () => {
  const ctx = useDropdownContext();

  useEffect(() => {
    const closeMenu = (e: MouseEvent | FocusEvent) => {
      if (open && e.target && ctx.dropdownRef.current && !ctx.dropdownRef.current.contains((e.target as any) as Node)) {
        ctx.setMenuOpen(false);
      }
    };
    window.addEventListener('click', closeMenu);
    window.addEventListener('focusin', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('focusin', closeMenu);
    };
  }, [open, ctx.dropdownRef]);

  useEffect(() => {
    const navigate = (e: KeyboardEvent) => {
      if (
        open &&
        e.target &&
        ctx.menuRef.current &&
        ctx.menuRef.current.contains((document.activeElement as any) as Node)
      ) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (ctx.highlightIndex === ctx.maxHighlightIndex) {
            ctx.setHighlightIndex(0);
          } else {
            ctx.setHighlightIndex(ctx.highlightIndex + 1);
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (ctx.highlightIndex === 0) {
            ctx.setHighlightIndex(ctx.maxHighlightIndex);
          } else {
            ctx.setHighlightIndex(ctx.highlightIndex - 1);
          }
        }
      }
    };
    window.addEventListener('keydown', navigate);
    return () => {
      window.removeEventListener('keydown', navigate);
    };
  }, [open, ctx.highlightIndex, ctx.menuRef]);

  useEffect(() => {
    if (!open) {
      ctx.setHighlightIndex(-1);
    }
  }, [open]);
};
