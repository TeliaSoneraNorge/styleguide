import React from 'react';
import classnames from 'classnames';

import { RadioButton } from '../../atoms/RadioButton';

const getClassName = (type: Type, children: React.ReactNode) =>
  classnames('radiobutton-group', {
    'radiobutton-group--horizontal': type === 'horizontal',
    'radiobutton-group--vertical': type === 'vertical',
    'radiobutton-group--rich-content': children !== null,
  });

type Type = 'horizontal' | 'vertical';

type ListProps = {
  label: string;
  value?: any;
  disabled?: boolean;
};

type Props = {
  name?: string;
  type?: Type;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  selectedValue?: any;
  list?: ListProps[];
};

const RadioButtonGroup: React.FC<Props> = (props) => {
  const { name, type = 'horizontal', onChange, selectedValue, list } = props;
  console.log(props);
  console.log(props.children);

  return (
    <div className={getClassName(type, props.children)}>
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
