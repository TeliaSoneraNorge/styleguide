<<<<<<< HEAD
import * as React from 'react';

export interface ButtonProps {
  /**
   * A button can have a text.
   */
  text?: string;
  type?: 'button' | 'reset' | 'submit';
  /**
   * A button can have different appearances e.g. 'primary', 'cancel'.
   */
  kind?: 'primary' | 'cancel' | 'link' | 'inverted' | 'negative';
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
=======
import React from 'react';

interface Props {
  text?: string;
  kind?: 'primary' | 'cancel' | 'link' | 'inverted' | 'negative';
  type?: 'button' | 'reset' | 'submit';
  margin?: 'top' | 'bottom';
  size?: 'small';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  processingText?: string;
  isProcessing?: boolean;
>>>>>>> master
  isDisabled?: boolean;

  /**
   * Children is not a valid prop, and is present with type `never` to override the default React.FC definition.
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34237
   */
  children?: never;
}

const Button: React.FC<ButtonProps>;

export default Button;
