import _ from 'lodash';
import React from 'react';
import classnames from 'classnames';

import RadioButtonWithLabel from './RadioButtonWithLabel';

const getClassName = (type) =>
    classnames('radio-button-list', { 'radio-button-list--horizontal' : type === 'horizontal' });

/**
 * Status: *in progress*.
 *
 * Waiting on the Photoshop files to get the exact checkmark SVG.
 */
const RadioButtonList = ({ list, selectedIndex, name, type }) =>
    <div className={getClassName(type)}>
        {list.map((radio, index) =>
            <RadioButtonWithLabel
                checked={index === selectedIndex}
                key={index}
                label={radio.label}
                name={name}
                value={radio.value}
            />)}
    </div>;

export default RadioButtonList;