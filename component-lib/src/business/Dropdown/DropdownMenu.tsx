import React, { useEffect } from 'react';
import { useDropdownContext, DropdownItemProps } from './index';
import cs from 'classnames';

interface DropdownMenuProps {
  position?: 'right' | 'left';
}
export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const { menuRef, open, setHighlightIndex, setMaxHighlightIndex } = useDropdownContext();
  let index = -1;

  const clickableChildren = React.Children.toArray(props.children).filter(child =>
    React.isValidElement<DropdownItemProps>(child)
  );
  useEffect(() => {
    if (setMaxHighlightIndex) {
      setMaxHighlightIndex(clickableChildren.length - 1);
    }
  }, [clickableChildren]);

  return (
    <div
      className={cs('Business-Dropdown-content', { open: open, right: props.position === 'right' })}
      tabIndex={0}
      ref={menuRef}
      onFocus={() => {
        if (setHighlightIndex) {
          setHighlightIndex(0);
        }
      }}
    >
      {React.Children.map(props.children, child => {
        if (React.isValidElement<DropdownItemProps>(child)) {
          index += 1;
          return React.cloneElement(child, {
            index: index,
          });
        }
        return child;
      })}
    </div>
  );
};
