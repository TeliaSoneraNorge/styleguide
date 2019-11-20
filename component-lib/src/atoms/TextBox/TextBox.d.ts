import * as React from 'react';

export interface TextBoxProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  small?: boolean;
  className?: string;
  onChange?: (...args: any[]) => any;
}

const TextBox: React.FC<TextBoxProps>;

export default TextBox;
