import React from 'react';
import { useDropdownContext } from './context';
import cs from 'classnames';

type DropdownMenuProps = {
  position?: 'right' | 'left';
  wrapContent?: boolean;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const { menuRef, open, allItems } = useDropdownContext();
  return (
    <div
      className={cs('telia-dropdown-content', {
        'telia-dropdown-content__nowrap': !props.wrapContent,
        open: open,
        right: props.position === 'right',
      })}
      ref={menuRef}
    >
      {allItems}
    </div>
  );
};
