import * as React from 'react';

declare interface TextAreaWithLabelProps {
  labelText: string;
  hideLabel?: boolean;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

declare const TextAreaWithLabel: React.FC<TextAreaWithLabelProps>;

export default TextAreaWithLabel;
