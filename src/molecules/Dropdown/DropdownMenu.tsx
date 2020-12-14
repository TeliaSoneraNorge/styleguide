import React, { useState, useEffect } from 'react';
import { useDropdownContext } from './context';
import cs from 'classnames';

type DropdownMenuProps = {
  position?: 'right' | 'left';
  wrapContent?: boolean;
  className?: string;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const { menuRef, open, allItems, dropdownRef } = useDropdownContext();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [menuHeight, setMenuHeight] = useState(0);
  const [visibility, setVisibility] = useState<'hidden' | 'visible'>('hidden');

  /**
   * Place the dropdown menu above toggle if we are close to the bottom of the page.
   */
  const dropdownPosition = (dropdownRef.current?.offsetTop ?? 0) + (dropdownRef.current?.offsetHeight ?? 0);
  const threshold = 0;
  const positionTop = windowHeight - (menuHeight + dropdownPosition) < threshold;

  useEffect(() => {
    const resize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    setMenuHeight(menuRef.current?.clientHeight ?? 0);
  }, [open, props.children]);

  /**
   * To prevent the menu from rendering below,
   * before jumping above we controle the visability state
   */
  useEffect(() => {
    if (menuHeight) {
      setVisibility('visible');
    } else {
      setVisibility('hidden');
    }
  }, [menuHeight]);

  return (
    <div
      className={cs(
        'telia-dropdown-content',
        {
          'telia-dropdown-content__positionTop': positionTop,
          'telia-dropdown-content__nowrap': !props.wrapContent,
          open: open,
          right: props.position === 'right',
        },
        props.className
      )}
      style={
        positionTop
          ? {
              transform: `translateY(calc(-100% - ${dropdownRef?.current?.offsetHeight ?? 0}px - 2px))`,
            }
          : { visibility }
      }
      ref={menuRef}
    >
      {allItems}
    </div>
  );
};
