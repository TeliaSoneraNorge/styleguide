import React from 'react';
import classnames from 'classnames';

import RadioButtonWithLabel from './RadioButtonWithLabel';

const getClassName = (type: any, hasRichContent: any) =>
  classnames('radio-button-list', {
    'radio-button-list--horizontal': type === 'horizontal',
    'radio-button-list--rich-content': hasRichContent,
  });

type Props = {
    list?: {
        label: string;
        value?: any;
        disabled?: boolean;
    }[];
    selectedIndex?: number;
    name?: string;
    type?: 'horizontal' | 'vertical';
    hasRichContent?: boolean;
    onChange?: (...args: any[]) => any;
    children?: React.ReactNode;
};

/**
 * Status: *finished*.
 * Category: FormElements
 */
const RadioButtonList = ({ list = [], selectedIndex, name, type, hasRichContent, onChange, children }: Props) => (
  <div className={getClassName(type, hasRichContent)}>
    {hasRichContent
      ? children
      : list.map((radio, index) => (
          <RadioButtonWithLabel
            checked={index === selectedIndex}
            key={radio.value}
            label={radio.label}
            name={name}
            onChange={onChange}
            disabled={radio.disabled}
            value={radio.value}
          />
        ))}
  </div>
);

export default RadioButtonList;
