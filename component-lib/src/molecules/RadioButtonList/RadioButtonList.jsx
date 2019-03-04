import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RadioButtonWithLabel from './RadioButtonWithLabel';

const getClassName = (type, hasRichContent) =>
    classnames('radio-button-list', { 'radio-button-list--horizontal' : type === 'horizontal' , 'radio-button-list--rich-content' : hasRichContent });

/**
 * Status: *finished*.
 *
 */
const RadioButtonList = ({ list = [], selectedIndex, name, type, hasRichContent, onChange, children }) =>
    <div className={getClassName(type, hasRichContent)}>
        {hasRichContent ?
            children
            : list.map((radio, index) =>
                <RadioButtonWithLabel
                    checked={index === selectedIndex}
                    key={index}
                    label={radio.label}
                    name={name}
                    onChange={onChange}
                    value={radio.value} />)
        }
    </div>;
RadioButtonList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any
    })),
    selectedIndex: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.oneOf(['horizontal', 'vertical']),
    hasRichContent: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node,
};

export default RadioButtonList;