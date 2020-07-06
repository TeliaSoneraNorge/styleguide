import React, { useEffect, useRef } from 'react';
import { useDropdownContext } from './context';
import { Icon, IconDefinition } from '../../atoms/Icon/index';
import cs from 'classnames';

interface DropdownToggleProps {
  label?: string;
  icon?: IconDefinition;
  hideLabel?: boolean;
  color?: 'purple' | 'default';
  outline?: boolean;
  tag?: 'div' | 'span';
}
export const DropdownToggle: React.FC<DropdownToggleProps> = props => {
  const { toggle, open } = useDropdownContext();
  const toggelRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (toggelRef.current) {
      toggelRef.current.blur();
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
      ref={toggelRef}
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
