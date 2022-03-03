import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { useDropdownContext } from './context';
import { Icon, IconDefinition } from '../../atoms/Icon/index';
import { TextField, TextFieldProps } from '../TextField/TextField';

export type Color = 'purple' | 'default' | 'white';
type DropdownToggleProps = {
  /**
   * Text to display in the toggle button
   */
  label?: string;
  /**
   * icon to display before the label
   */
  icon?: IconDefinition;
  /**
   * Whether to hide the label.
   * Intended to be used with an icon for icon-toggles
   */
  hideLabel?: boolean;

  /**
   * Base color for the toggle. Border, text and icon
   */
  color?: Color;

  /**
   * Wheter to display borders around the toggle.
   */
  outline?: boolean;

  /**
   * This component renders a new dropdown toggle by default,
   * Provided children it will render the child/children as the toggle component,
   * applied with the toggle function from dropdown context on the onClick prop.
   */
  children?: React.ReactNode;

  /**
   * Tag of the toggle wrapper when
   * using a custom toggle component (passing children)
   */
  tag?: 'div' | 'span';

  type?: 'submit' | 'reset' | 'button';

  disabled?: boolean;

  className?: string;
};

export const DropdownToggle: React.FC<DropdownToggleProps> = (props) => {
  const { toggle, open, dropdownRef } = useDropdownContext();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const blurToggleButton = () => {
    if (dropdownRef.current) {
      const toggleItem = toggleRef.current
        ? toggleRef.current
        : dropdownRef.current.querySelector<HTMLButtonElement>('.telia-dropdown-toggle > button');
      if (toggleItem) {
        toggleItem.blur();
      }
    }
  };

  useEffect(() => {
    blurToggleButton();
  }, [open]);

  const Tag = props.tag || 'span';
  if (props.children) {
    return (
      <Tag className="telia-dropdown-toggle">
        {React.Children.map(props.children, (child) =>
          typeof child === 'string' ? (
            <div onClick={toggle}>{child}</div>
          ) : React.isValidElement(child) ? (
            React.cloneElement(child, { onClick: toggle, ref: toggleRef, ...props })
          ) : null
        )}
      </Tag>
    );
  }
  return (
    <button
      ref={toggleRef}
      onClick={toggle}
      type={props.type}
      className={cn(
        'telia-dropdown-toggle telia-dropdown-toggle__default',
        {
          'telia-dropdown-toggle__hideLabel': props.hideLabel,
          'telia-dropdown-toggle__purple': props.color === 'purple',
          'telia-dropdown-toggle__white': props.color === 'white',
          'telia-dropdown-toggle__outline': props.outline !== false,
          'telia-dropdown-toggle__disabled': props.disabled,
        },
        props.className
      )}
      disabled={props.disabled}
    >
      {props.icon ? <Icon className="telia-dropdown-toggle-icon" icon={props.icon} /> : null}
      <span className="telia-dropdown-toggle-label">{props.label}</span>
      <Icon className="telia-dropdown-toggle-caret" icon="arrow-small-down" />
    </button>
  );
};

type DropdownSearchToggleProps = TextFieldProps & {
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
   * Whether to render the dropdown  immediately
   */
  openImmediately?: boolean;

  /**
   * Icon to diplay in front of search input
   */
  icon?: IconDefinition;
};

export const DropdownSearchToggle = (props: DropdownSearchToggleProps) => {
  const { setMenuOpen, setHighlightIndex } = useDropdownContext();
  const leftContent = props.icon ? (
    <Icon icon={props.icon} style={{ height: '1.5rem', width: '1.5rem' }} />
  ) : (
    props.leftContent
  );

  return (
    <TextField
      className="telia-dropdown-toggle telia-dropdown-toggle__search"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => {
        props.onInputChange(e.target.value);
        setHighlightIndex(0);
      }}
      onFocus={() => {
        if (props.openImmediately) {
          setMenuOpen(true);
        }
      }}
      leftContent={leftContent}
      autoComplete="new-off"
      {...props}
    />
  );
};
