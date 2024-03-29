import * as React from 'react';

declare interface TextAreaWithLabelProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
  hideLabel?: boolean;
  placeholder?: string;
  value?: string;
  error?: string;
  disabled?: boolean;
}

declare const TextAreaWithLabel: React.FC<TextAreaWithLabelProps>;

export default TextAreaWithLabel;
