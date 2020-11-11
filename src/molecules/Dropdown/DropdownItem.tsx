import React, { useRef, useEffect } from 'react';
import cs from 'classnames';
import { useDropdownContext } from './context';
import { Icon, IconDefinition } from '../../atoms/Icon/index';

export type DropdownItemProps = {
  /**
   * Main content for dropdown item.
   */
  label?: string;

  /**
   * Handle click on a dropdown item
   * Items without onClick will not be hoverable
   */
  onClick?: () => void;

  /**
   * Sets link role on button.
   * Use together with onClick function.
   */
  href?: string;

  /**
   * Icon displayd before label in the item
   */
  icon?: IconDefinition;

  /**
   * Wheter the content of the item should be centered
   */
  centered?: boolean;

  /**
   * Position of item in the dropdown menu.
   * Used for navigation with keyboard.
   * Applied from the DropdownMenu
   */
  index?: number;

  /**
   * Whether the item is a header.
   * Non clickable. Applies different styling
   */
  header?: boolean;

  /**
   * Whether the item is a divider.
   * Renders a simple fullwidth line in the dropdown
   */
  divider?: boolean;

  /**
   * Optional content to display under label.
   * Can also be used instead of label.
   */
  children?: React.ReactNode;
  className?: string;
};
export const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const { open, toggle, itemToggle, highlightIndex, menuRef } = useDropdownContext();
  const itemRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    if (menuRef.current) {
      const firstItem = menuRef.current.querySelector('button.telia-dropdown-item');
      if (firstItem && itemRef.current && firstItem === itemRef.current) {
        itemRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
  };

  const scrollActiveIntoView = () => {
    if (props.index === highlightIndex && itemRef.current) {
      itemRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  };

  /**
   * NB: scrollIntoView is not supported properly in ie11. This currently
   * needs to be handled by the user with a polyfill
   */
  useEffect(() => {
    if (highlightIndex === -1) {
      scrollToTop();
    } else {
      scrollActiveIntoView();
    }
  }, [props.index, highlightIndex, itemRef.current, open]);

  const onClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
    if (itemToggle) {
      toggle();
    }
  };

  const content = (
    <>
      {props.icon ? (
        <div>
          <Icon icon={props.icon} />
        </div>
      ) : null}
      <div>
        {props.label ? <div>{props.label}</div> : null}
        <div>{props.children}</div>
      </div>
    </>
  );

  if (props.divider) {
    return <div className="telia-dropdown-item telia-dropdown-item__divider" />;
  }
  if (props.header) {
    return <div className="telia-dropdown-item telia-dropdown-item__header">{content}</div>;
  }
  return (
    <button
      className={cs(
        'telia-dropdown-item',
        {
          'telia-dropdown-item__centered': props.centered,
          'telia-dropdown-item__active': open && props.index === highlightIndex,
          'telia-dropdown-item--noHover': !props.onClick,
        },
        props.className
      )}
      ref={itemRef}
      tabIndex={-1}
      role={props.href ? 'link' : 'button'}
      onFocus={(e) => e.stopPropagation()}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

type DropdownSearchItemProps = {
  /**
   * Handle input change
   */
  onInputChange: (value: string) => void;

  /**
   * String to display inside input field
   */
  placeholder?: string;

  /**
   * value of the search input
   */
  value?: string;

  /**
   * icon to display in front of
   */
  icon?: IconDefinition;
};
export const DropdownSearchItem = (props: DropdownSearchItemProps) => {
  const { open, setHighlightIndex } = useDropdownContext();
  const itemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (itemRef.current && open) {
      itemRef.current.focus();
    }
  }, [open, itemRef.current]);

  return (
    <div className="telia-dropdown-item telia-dropdown-item__search">
      {props.icon ? <Icon icon={props.icon} style={{ height: '1.5rem', width: '1.5rem' }} /> : null}
      <input
        ref={itemRef}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onInputChange(e.target.value);
          setHighlightIndex(0);
        }}
      />
    </div>
  );
};
