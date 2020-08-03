import * as React from 'react';

export interface ToggleButtonProps {
  defaultChecked?: boolean;
  id: string;
  labelText: string;
  onChange?: (...args: any[]) => any;
  checked?: boolean;
  descriptionText?: string;
  toggleOnLeftSide?: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps>;

export default ToggleButton;
