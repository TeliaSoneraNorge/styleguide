import React, { useEffect } from 'react';
import { useDropdownContext } from './context';
import { DropdownItemProps } from './DropdownItem';
import cs from 'classnames';

interface DropdownMenuProps {
  position?: 'right' | 'left';
  wrapContent?: boolean;
}
const isClickable = (child: any) =>
  React.isValidElement<DropdownItemProps>(child) && !child.props.header && !child.props.divider;

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const { menuRef, open, setHighlightIndex, setMaxHighlightIndex } = useDropdownContext();
  let index = -1;

  const clickableChildren = React.Children.toArray(props.children).filter(isClickable);

  useEffect(() => {
    if (setMaxHighlightIndex) {
      setMaxHighlightIndex(clickableChildren.length - 1);
    }
  }, [clickableChildren]);

  return (
    <div
      className={cs('Business-Dropdown-content', {
        'Business-Dropdown-content--nowrap': !props.wrapContent,
        open: open,
        right: props.position === 'right',
      })}
      tabIndex={0}
      ref={menuRef}
      onFocus={() => {
        if (setHighlightIndex) {
          setHighlightIndex(0);
        }
      }}
    >
      {React.Children.map(props.children, child => {
        if (React.isValidElement<DropdownItemProps>(child) && isClickable(child)) {
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
