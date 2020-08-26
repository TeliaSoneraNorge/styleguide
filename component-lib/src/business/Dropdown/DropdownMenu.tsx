import React from 'react';
import { useDropdownContext } from './context';
import cs from 'classnames';

interface DropdownMenuProps {
  position?: 'right' | 'left';
  wrapContent?: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const { menuRef, open, allItems } = useDropdownContext();
  return (
    <div
      className={cs('Business-Dropdown-content', {
        'Business-Dropdown-content--nowrap': !props.wrapContent,
        open: open,
        right: props.position === 'right',
      })}
      ref={menuRef}
    >
      {allItems}
    </div>
  );
};
