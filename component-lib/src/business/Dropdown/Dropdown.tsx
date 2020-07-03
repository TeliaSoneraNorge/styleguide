import React, { useRef, useEffect, useState, useContext } from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon/index';

const DropdownContext = React.createContext<DropdownProps | null>(null);
const useDropdownContext = () => {
  const value = useContext(DropdownContext);
  if (!value) {
    throw new Error('No dropdown context');
  }
  return value;
};

interface DropdownProps {
  open?: boolean;
  toggle?: () => void;
  menuRef?: React.RefObject<HTMLDivElement>;
  highlightIndex?: number;
  setHighlightIndex?: (index: number) => void;
  setMaxHighlightIndex?: (index: number) => void;
  maxHighlightIndex?: number;
}

export const Dropdown: React.FC<DropdownProps> = props => {
  const [open, setOpen] = useState(props.open || false);
  const [highlightIndex, setHighlightIndex] = useState(props.highlightIndex || -1);
  const [maxHighlightIndex, setMaxHighlightIndex] = useState(highlightIndex);

  const toggle = () => setOpen(!open);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeMenu = (e: MouseEvent | FocusEvent) => {
      if (open && e.target && dropdownRef.current && !dropdownRef.current.contains((e.target as any) as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', closeMenu);
    window.addEventListener('focusin', closeMenu);

    return () => {
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('focusin', closeMenu);
    };
  }, [open]);

  useEffect(() => {
    const navigate = (e: KeyboardEvent) => {
      if (open && e.target && menuRef.current && menuRef.current.contains((document.activeElement as any) as Node)) {
        if (e.key === 'ArrowDown') {
          if (highlightIndex === maxHighlightIndex) {
            setHighlightIndex(0);
          } else {
            setHighlightIndex(highlightIndex + 1);
          }
        } else if (e.key === 'ArrowUp') {
          if (highlightIndex === 0) {
            setHighlightIndex(maxHighlightIndex);
          } else {
            setHighlightIndex(highlightIndex - 1);
          }
        }
      }
    };
    window.addEventListener('keydown', navigate);
    return () => {
      window.removeEventListener('keydown', navigate);
    };
  }, [open, highlightIndex]);

  useEffect(() => {
    if (!open) {
      setHighlightIndex(-1);
    }
  }, [open]);

  const contextValue: DropdownProps = {
    open: props.open ? props.open : open,
    toggle: props.toggle ? props.toggle : toggle,
    menuRef,
    highlightIndex,
    setHighlightIndex,
    maxHighlightIndex,
    setMaxHighlightIndex,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div>
        <div className="Business-Dropdown" ref={dropdownRef}>
          {props.children}
        </div>
      </div>
    </DropdownContext.Provider>
  );
};

interface DropdownToggleProps {
  label: string;
  icon?: IconDefinition;
  hideLabel?: boolean;
}
export const DropdownToggle = (props: DropdownToggleProps) => {
  const { toggle } = useDropdownContext();

  return (
    <button
      onClick={toggle}
      className={cs('Business-Dropdown-toggle', { 'Business-Dropdown-toggle--hideLabel': props.hideLabel })}
    >
      {props.icon ? <Icon className="Business-Dropdown-toggle-icon" icon={props.icon} /> : null}
      <span className="Business-Dropdown-toggle-label">{props.label}</span>
      <Icon className="Business-Dropdown-toggle-caret" icon="arrow-small-down" />
    </button>
  );
};

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

interface DropdownItemProps {
  label?: string;
  onClick: () => void;
  icon?: IconDefinition;
  centere?: boolean;
  index?: number;
}
export const DropdownItem: React.FC<DropdownItemProps> = props => {
  const { open, toggle, highlightIndex } = useDropdownContext();
  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && props.index === highlightIndex && itemRef.current) {
      itemRef.current.focus();
    }
  }, [open, highlightIndex]);

  return (
    <button
      className={cs('Business-Dropdown-item', { 'Business-Dropdown-item--centered': props.centere })}
      ref={itemRef}
      tabIndex={-1}
      onFocus={e => e.stopPropagation()}
      onClick={() => {
        props.onClick();
        if (toggle) {
          toggle();
        }
      }}
    >
      {props.icon ? (
        <div>
          <Icon icon={props.icon} />
        </div>
      ) : null}
      <div>
        {props.label ? <div>{props.label}</div> : null}
        <div>{props.children}</div>
      </div>
    </button>
  );
};
