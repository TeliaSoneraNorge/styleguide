import React from 'react';
import { useDropdownContext } from './context';
import cs from 'classnames';

type DropdownMenuProps = {
  position?: 'right' | 'left';
  wrapContent?: boolean;
  className?: string;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const { menuRef, open, allItems, dropdownRef } = useDropdownContext();

  /**
   * Place the dropdown menu above toggle if we are close to the bottom of the page.
   */
  const dropdownPosition = (dropdownRef.current?.offsetTop ?? 0) + (dropdownRef.current?.offsetHeight ?? 0);
  const threshold = 50;
  const positionTop = document.body.offsetHeight - dropdownPosition < threshold;

  return (
    <div
      className={cs(
        'telia-dropdown-content',
        {
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
          : undefined
      }
      ref={menuRef}
    >
      {allItems}
    </div>
  );
};
