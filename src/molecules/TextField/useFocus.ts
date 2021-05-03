import React, { useRef, useState, useEffect } from 'react';
import { TextFieldProps } from './TextField';

/**
 * Handle internal focus state for TextField to set appropriate style when input is focued.
 * Add focus handling to the event handlers
 */
export const useFocus = (props: TextFieldProps) => {
  const localRef = useRef<HTMLInputElement>(null);
  const inputRef = props.inputRef || localRef;
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      if (focus) {
        inputRef.current.focus();
      } else {
        inputRef.current.blur();
      }
    }
  }, [focus, inputRef.current]);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }
    if (e.keyCode === 9) {
      e.stopPropagation();
    }
  };

  return {
    inputRef,
    focus,
    setFocus,
    onFocus,
    onBlur,
    onChange: props.onChange,
    onKeyDown,
  };
};
