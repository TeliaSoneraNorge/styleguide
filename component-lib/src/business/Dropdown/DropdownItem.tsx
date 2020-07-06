import React, { useRef, useEffect } from 'react';
import cs from 'classnames';
import { useDropdownContext } from './context';
import { Icon, IconDefinition } from '../../atoms/Icon/index';

export interface DropdownItemProps {
  label?: string;
  onClick?: () => void;
  icon?: IconDefinition;
  centere?: boolean;
  index?: number;
  header?: boolean;
  divider?: boolean;
}
export const DropdownItem: React.FC<DropdownItemProps> = props => {
  const { open, toggle, highlightIndex } = useDropdownContext();
  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && props.index === highlightIndex && itemRef.current) {
      itemRef.current.focus();
    }
  }, [open, highlightIndex]);

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
      className={cs('Business-Dropdown-item', { 'Business-Dropdown-item--centered': props.centere })}
      ref={itemRef}
      tabIndex={-1}
      onFocus={e => e.stopPropagation()}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
