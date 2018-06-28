import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label/Label';

/**
 * Status: *finished*
 *
 * Standard color is black. Labels used with TextBoxWithLabel, TextAreaWithLabel and DropDownListWithLabel should appear on top of input element and be in grey color.
 */
const LabelWithIcon = ({ className, isUsingGrayText, children, tooltipText, iconSrc }) => (
    <Label
        className={classnames('label-with-icon', {
            [className]: className,
        })}
        isUsingGrayText={isUsingGrayText}>
        {children}
        <div className="label__tooltip">
            <img className="label__icon" src={iconSrc} role="presentation" alt="" />
            <span className="label__tooltip-text">{tooltipText}</span>
        </div>
    </Label>
);

LabelWithIcon.propTypes = {
    isUsingGrayText: PropTypes.bool,
    tooltipText: PropTypes.string,
    iconSrc: PropTypes.string,
};

export default LabelWithIcon;