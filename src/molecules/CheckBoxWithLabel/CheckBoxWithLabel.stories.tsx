import React, { useState } from 'react';
import { CheckBoxWithLabel } from '../../index';

export default {
  title: 'Component library/Molecules/CheckBoxWithLabel',
  component: CheckBoxWithLabel,
};

export const Default = () => <CheckBoxWithLabel label="I am not checked" defaultChecked />;

export const Disabled = () => <CheckBoxWithLabel label="Checkbox is disabled" disabled />;

export const Unchecked = () => <CheckBoxWithLabel label="I am not checked" />;

export const ControlledByParent = () => {
  const [checkboxValue, setcheckboxValue] = useState(false);

  return (
    <React.Fragment>
      <p>Getting checked value: {'' + checkboxValue}</p>
      <CheckBoxWithLabel
        checked={checkboxValue}
        onChange={(e: React.BaseSyntheticEvent) => setcheckboxValue(e.target.checked)}
        label="Getting value from onClick"
      />
    </React.Fragment>
  );
}