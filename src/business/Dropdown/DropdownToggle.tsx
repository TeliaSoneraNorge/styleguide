import React, { useEffect, useRef } from 'react';
import { useDropdownContext } from './context';
import { Icon, IconDefinition } from '../../atoms/Icon/index';
import cs from 'classnames';

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
  color?: 'purple' | 'default';

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
};

export const DropdownToggle: React.FC<DropdownToggleProps> = props => {
  const { toggle, open } = useDropdownContext();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (toggleRef.current) {
      toggleRef.current.blur();
    }
  }, [open]);

  const Tag = props.tag || 'span';
  if (props.children) {
    return (
      <Tag className="Business-Dropdown-toggle">
        {React.Children.map(props.children, child =>
          typeof child === 'string' ? (
            <div onClick={toggle}>{child}</div>
          ) : React.isValidElement(child) ? (
            React.cloneElement(child, { onClick: toggle, ...props })
          ) : null
        )}
      </Tag>
    );
  }
  return (
    <button
      ref={toggleRef}
      onClick={toggle}
      className={cs('Business-Dropdown-toggle Business-Dropdown-toggle--default', {
        'Business-Dropdown-toggle--hideLabel': props.hideLabel,
        'Business-Dropdown-toggle--purple': props.color === 'purple',
        'Business-Dropdown-toggle--outline': props.outline !== false,
      })}
    >
      {props.icon ? <Icon className="Business-Dropdown-toggle-icon" icon={props.icon} /> : null}
      <span className="Business-Dropdown-toggle-label">{props.label}</span>
      <Icon className="Business-Dropdown-toggle-caret" icon="arrow-small-down" />
    </button>
  );
};

type DropdownSearchToggleProps = {
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

  return (
    <span className="Business-Dropdown-toggle Business-Dropdown-toggle--search textbox">
      {props.icon ? (
        <Icon icon={props.icon} style={{ height: '1.5rem', width: '1.5rem', marginRight: '0.5rem' }} />
      ) : null}
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => {
          props.onInputChange(e.target.value);
          setHighlightIndex(0);
        }}
        onFocus={() => {
          if (props.openImmediately) {
            setMenuOpen(true);
          }
        }}
      />
    </span>
  );
};
