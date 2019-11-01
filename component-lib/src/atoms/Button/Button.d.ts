import React from "react";

interface Props {
  text?: string;
  type?: "button" | "reset" | "submit";
  kind?: "primary" | "cancel" | "link" | "inverted" | "negative";
  margin?: "top" | "bottom";
  size?: "small";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  processingText?: string;
  isProcessing?: boolean;
  isDisabled?: boolean;

  /**
   * Children is not a valid prop, and is present with type `never` to override the default React.FC definition.
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34237
   */
  children?: never;
}

declare const Button: React.FC<Props>;

export default Button;
