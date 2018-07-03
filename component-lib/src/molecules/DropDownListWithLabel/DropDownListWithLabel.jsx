import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label/Label';

/**
 * Status: *finished*.
 *
 **/
const DropDownListWithLabel = ({ className, labelMode, visibleLabel, label, selectedOption, changeSelectedOption, options = [], ...rest }) => (
    <Label
        className={classnames('dropdown-list-with-label', {
            [className]: className,
            [`dropdown-list-with-label--${labelMode}`]: labelMode
        })}
        isUsingGrayText={labelMode !== 'text-to-right'}>
        {visibleLabel ?
            <span className="dropdown-list-with-label__label-text">{label}</span> : null}
        <select
            className={classnames('dropdown-list-with-label__select', {
                'dropdown-list-with-label__select--half': labelMode === 'text-to-right'
            })}
            defaultValue={selectedOption}
            onChange={changeSelectedOption}
            aria-label={visibleLabel ? null : label}
            {...rest}>
            {options.map((option) =>
                <option className="dropdown-list-with-label__option" key={option}>
                    {option}
                </option>)}
        </select>
    </Label>
);
DropDownListWithLabel.propTypes = {
    labelMode: PropTypes.oneOf(['text-to-right']),
    visibleLabel: PropTypes.bool,
    selectedOption: PropTypes.string,
    label: PropTypes.node,
    /** Called on select value change. */
    changeSelectedOption: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
};

export default DropDownListWithLabel;