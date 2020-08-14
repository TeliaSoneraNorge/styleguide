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
   */
  onClick?: () => void;

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
};
export const DropdownItem: React.FC<DropdownItemProps> = props => {
  const { open, toggle, highlightIndex } = useDropdownContext();
  const itemRef = useRef<HTMLButtonElement>(null);

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    toggle();
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
    return <div className="Business-Dropdown-item Business-Dropdown-item--divider" />;
  }
  if (props.header) {
    return <div className="Business-Dropdown-item Business-Dropdown-item--header">{content}</div>;
  }
  return (
    <button
      className={cs('Business-Dropdown-item', {
        'Business-Dropdown-item--centered': props.centered,
        'Business-Dropdown-item--active': open && props.index === highlightIndex && itemRef.current,
      })}
      ref={itemRef}
      tabIndex={-1}
      onFocus={e => e.stopPropagation()}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

interface DropdownSearchItemProps {
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
}
export const DropdownSearchItem = (props: DropdownSearchItemProps) => {
  const { open, setHighlightIndex } = useDropdownContext();
  const itemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (itemRef.current && open) {
      itemRef.current.focus();
    }
  }, [open, itemRef.current]);

  return (
    <input
      ref={itemRef}
      value={props.value}
      placeholder={props.placeholder}
      className="Business-Dropdown-item Business-Dropdown-item--search textbox"
      onChange={e => {
        props.onInputChange(e.target.value);
        setHighlightIndex(0);
      }}
    />
  );
};
