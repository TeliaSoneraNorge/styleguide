import React from 'react';
import classnames from 'classnames';

import RadioButton from '../../atoms/RadioButton';

const getClassName = (type: any, children: any) =>
  classnames('radiobutton-group', {
    'radiobutton-group--horizontal': type === 'horizontal',
    'radiobutton-group--vertical': type === 'vertical',
    'radiobutton-group--rich-content': children !== null,
  });

type Props = {
    list?: {
        label: string;
        value?: any;
        disabled?: boolean;
    }[];
    selectedValue?: any;
    name?: string;
    type?: 'horizontal' | 'vertical';
    onChange?: (...args: any[]) => any;
    children?: React.ReactNode;
};

/**
 * Status: *finished*.
 * Category: FormElements
 */
const RadioButtonGroup = ({ list = [], name, type, onChange, selectedValue, children }: Props) => (
  <div className={getClassName(type, children)}>
    {children != null
      ? children
      : list.map(radio => (
          <RadioButton
            label={radio.label}
            name={name}
            value={radio.value}
            checked={radio.value === selectedValue}
            disabled={radio.disabled}
            onChange={onChange}
            key={radio.value}
          />
        ))}
  </div>
);

export default RadioButtonGroup;
