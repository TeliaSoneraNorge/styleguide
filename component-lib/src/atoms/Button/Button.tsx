import React from 'react';
import classnames from 'classnames';

export interface ButtonProps {
  component?: 'button' | 'a' | 'div';
  /**
   * A button can have a text.
   */
  text?: string;
  type?: 'button' | 'reset' | 'submit';
  /**
   * A button can have different appearances e.g. 'primary', 'cancel'.
   */
  kind?: 'normal' | 'primary' | 'cancel' | 'link' | 'inverted' | 'negative';
  /**
   * One of ['top', 'bottom']
   */
  margin?: 'top' | 'bottom';
  /**
   * A button can have different sizes e.g. 'small'.
   */
  size?: 'small';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Additional classes.
   */
  className?: string;
  /**
   * A button can change text while it is processing.
   */
  processingText?: string;
  /**
   * A button can be in processing state
   */
  isProcessing?: boolean;
  /**
   * A button can be disabled.
   */
  isDisabled?: boolean;

  /**
   * Children is not a valid prop, and is present with type `never` to override the default React.FC definition.
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34237
   */
  children?: never;
}

/**
 * Status: *finished*.
 * Category: Buttons
 */
const Button = (props: ButtonProps) => {
  const {
    component, 
    text,
    kind,
    size,
    onClick,
    className,
    processingText,
    isProcessing,
    isDisabled,
    type = 'button',
    margin,
    ...rest
  } = props;
  
  
  return (
    <>
    {!component && 
      <button
        className={classnames('button', {
          [`button--${kind}`]: !isDisabled && kind,
          [`button--${size}`]: size,
          [`button--margin-${margin}`]: margin,
          'button--processing': isProcessing,
          'button--disabled': isDisabled,
          [className]: className,
        })}
        onClick={onClick}
        disabled={isProcessing || isDisabled}
        type={type}
        {...rest}
      >
        {!isProcessing && text}
        {isProcessing && (
          <span className="button__processing">
            {processingText}
            <span className="button__processing-dot">.</span>
            <span className="button__processing-dot">.</span>
            <span className="button__processing-dot">.</span>
          </span>
        )}
      </button>
    }
    </>
  )
};

Button.types = {
  button: 'button',
  reset: 'reset',
  submit: 'submit',
};

Button.kinds = {
  normal: 'normal',
  primary: 'primary',
  cancel: 'cancel',
  link: 'link',
  inverted: 'inverted',
  negative: 'negative',
};

Button.margins = {
  top: 'top',
  bottom: 'bottom',
};

export default Button;