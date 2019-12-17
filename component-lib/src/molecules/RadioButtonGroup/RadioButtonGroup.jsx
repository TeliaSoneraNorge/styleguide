import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RadioButton from '../../atoms/RadioButton';

const getClassName = (type, children) =>
  classnames('radiobutton-group', {
    'radiobutton-group--horizontal': type === 'horizontal',
    'radiobutton-group--rich-content': children !== null,
  });

/**
 * Status: *finished*.
 * Category: FormElements
 */
const RadioButtonGroup = ({ list = [], name, type, onChange, selectedValue, children }) => (
  <div className={getClassName(type, children)}>
    {children !== null && children !== undefined
      ? children
      : list.map((radio, index) => (
          <RadioButton
            label={radio.label}
            name={name}
            value={radio.value}
            checked={selectedValue === radio.value || index === selectedValue}
            disabled={radio.disabled}
            onChange={onChange}
            key={radio.value}
          />
        ))}
  </div>
);

RadioButtonGroup.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
      disabled: PropTypes.bool,
    })
  ),
  selectedValue: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default RadioButtonGroup;
