import React from 'react';
import classnames from 'classnames';

import RadioButtonWithLabel from './RadioButtonWithLabel';

const getClassName = (type, hasRichContent) =>
    classnames('radio-button-list', { 'radio-button-list--horizontal' : type === 'horizontal' , 'radio-button-list--rich-content' : hasRichContent });

/**
 * Status: *finished*.
 *
 */
const RadioButtonList = ({ list, selectedIndex, name, type, hasRichContent, children }) =>
    <div className={getClassName(type, hasRichContent)}>
        {hasRichContent ?
            children
            : list.map((radio, index) =>
                <RadioButtonWithLabel
                    checked={index === selectedIndex}
                    key={index}
                    label={radio.label}
                    name={name}
                    value={radio.value}/>)
        }
    </div>;

export default RadioButtonList;