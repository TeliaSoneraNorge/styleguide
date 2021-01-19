import React, { useState, useRef } from 'react';
import cs from 'classnames';

interface Props {
  checked: boolean;
  disabled?: boolean;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
}

export const Toggle: React.FC<Props> = (props) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    if (props.onFocus) {
      props.onFocus(event);
    }
    setFocus(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (props.onBlur) {
      props.onBlur(event);
    }
    setFocus(false);
  }

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (inputRef && inputRef.current) {
      event.preventDefault();
      inputRef.current.focus();
      inputRef.current.click();
    }
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (inputRef && inputRef.current && event.keyCode === 32) {
      event.preventDefault();
      inputRef.current.focus();
      inputRef.current.click();
    }
  }

  return (
    <div
      className={cs(
        {
          'telia-toggle': true,
          checked: props.checked,
          focus: focus,
          disabled: props.disabled,
        },
        props.className
      )}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      tabIndex={props.disabled ? -1 : 0}
    >
      <div className="telia-toggle-track"></div>
      <div className="telia-toggle-thumb">
        <div
          className={cs({
            'telia-toggle-thumb-indicator': props.checked,
          })}
        />
      </div>

      <input
        {...props}
        onChange={props.onChange}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="telia-toggle-screenreader-only"
        type="checkbox"
        tabIndex={-1}
      />
    </div>
  );
};
