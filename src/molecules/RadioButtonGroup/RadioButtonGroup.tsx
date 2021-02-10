import React from 'react';
import classnames from 'classnames';

import { RadioButton } from '../../atoms/RadioButton';

const getClassName = (type: Type, children: React.ReactNode, border?: boolean) =>
  classnames('radiobutton-group', {
    'radiobutton-group--horizontal': type === 'horizontal',
    'radiobutton-group--vertical': type === 'vertical',
    'radiobutton-group--rich-content': children !== null,
    'radiobutton-group--border': border,
  });

type Type = 'horizontal' | 'vertical';

type ListProps = {
  label: string;
  value?: any;
  disabled?: boolean;
};

type Props = {
  name?: string;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  selectedValue?: any;
  list?: ListProps[];
} & ({ type: 'vertical' | undefined; border?: boolean } | { type?: Type });

const RadioButtonGroup: React.FC<Props> = (props) => {
  const { name, type = 'vertical', onChange, selectedValue, list } = props;
  const border = 'border' in props ? props.border : false;
  return (
    <div className={getClassName(type, props.children, border)}>
      {!!props.children === true
        ? props.children
        : list
        ? list.map((radio) => (
            <RadioButton
              label={radio.label}
              name={name}
              value={radio.value}
              checked={radio.value === selectedValue}
              disabled={radio.disabled}
              onChange={onChange}
              key={radio.value}
            />
          ))
        : null}
    </div>
  );
};

export default RadioButtonGroup;
