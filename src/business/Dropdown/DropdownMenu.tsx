import React, { useEffect, useMemo } from 'react';
import { useDropdownContext } from './context';
import { DropdownItemProps } from './DropdownItem';
import cs from 'classnames';

interface DropdownMenuProps {
  position?: 'right' | 'left';
  wrapContent?: boolean;
}

function isDefined(entry: false | (() => void) | undefined): entry is () => void {
  return !!entry;
}
const isValidChild = (child: any) =>
  child.type.name === 'DropdownItem' && React.isValidElement<DropdownItemProps>(child);
const isClickable = (child: any) => {
  return isValidChild(child) && !child.props.header && !child.props.divider;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const { menuRef, open, setMaxHighlightIndex, setClickHandlers } = useDropdownContext();
  let index = -1;

  const clickableChildren = useMemo(() => React.Children.toArray(props.children).filter(isClickable), [props.children]);

  useEffect(() => {
    if (setMaxHighlightIndex) {
      setMaxHighlightIndex(clickableChildren.length - 1);
    }
    const clickHandlers = clickableChildren
      .map(child => React.isValidElement<DropdownItemProps>(child) && child.props.onClick)
      .filter(isDefined);
    if (setClickHandlers) {
      setClickHandlers(clickHandlers);
    }
  }, [clickableChildren]);

  return (
    <div
      className={cs('Business-Dropdown-content', {
        'Business-Dropdown-content--nowrap': !props.wrapContent,
        open: open,
        right: props.position === 'right',
      })}
      ref={menuRef}
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
