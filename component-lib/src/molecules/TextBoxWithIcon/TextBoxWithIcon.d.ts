import * as React from 'react';

declare interface TextBoxWithIconProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  small?: boolean;
  iconName?: string;
  iconColor?: string;
  iconIsButton?: boolean;
  iconLabel?: string;
  title?: string;
  className?: string;
  onChange?: (...args: any[]) => any;
}

declare const TextBoxWithIcon: React.FC<TextBoxWithIconProps>;

export default TextBoxWithIcon;
