import { useEffect } from 'react';
import { useDropdownContext } from './index';

/**
 * Functionality for making a dropdown accessible.
 * This hook is applied do the dropdown in the Styleguide (see InnerDropdown in Dropdown.tsx).
 *
 * This functionality is extracted for readability and separation of concert,
 * and is only intended for use in the Stylguide
 * -- no need to apply accessibility manualy when using the Dropdown
 */
export const useAccessibleDropdown = () => {
  const ctx = useDropdownContext();

  useEffect(() => {
    const closeMenu = (e: MouseEvent | FocusEvent) => {
      if (
        ctx.open &&
        e.target &&
        ctx.dropdownRef.current &&
        !ctx.dropdownRef.current.contains((e.target as any) as Node)
      ) {
        ctx.toggle();
      }
    };
    window.addEventListener('click', closeMenu);
    window.addEventListener('focusin', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('focusin', closeMenu);
    };
  }, [ctx.open, ctx.dropdownRef]);

  useEffect(() => {
    const click = (e: KeyboardEvent) => {
      const clickItem = ctx.menuRef.current
        ? ctx.menuRef.current.querySelector<HTMLButtonElement>('button.telia-dropdown-item__active')
        : null;
      if (e.keyCode === 13) {
        if (clickItem) {
          clickItem.click();
          ctx.toggle();
        }
      }
    };
    const navigate = (e: KeyboardEvent) => {
      if (ctx.open && e.target && ctx.menuRef.current) {
        // arrow down
        if (e.keyCode === 40) {
          e.preventDefault();
          if (ctx.highlightIndex === ctx.maxHighlightIndex) {
            ctx.setHighlightIndex(0);
          } else {
            ctx.setHighlightIndex(ctx.highlightIndex + 1);
          }
        }
        // arrow up
        else if (e.keyCode === 38) {
          e.preventDefault();
          if (ctx.highlightIndex === 0) {
            ctx.setHighlightIndex(ctx.maxHighlightIndex);
          } else {
            ctx.setHighlightIndex(ctx.highlightIndex - 1);
          }
        }
      }
    };
    const handleKeydown = (e: KeyboardEvent) => {
      navigate(e);
      click(e);
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [ctx.open, ctx.highlightIndex, ctx.menuRef]);

  console.log(ctx.highlightIndex);

  useEffect(() => {
    if (!ctx.open) {
      ctx.setHighlightIndex(-1);
    }
  }, [ctx.open]);
};
