import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label/Label';

const normalizeOptions = (options) =>
    options.map(option => option instanceof Object
        ? option
        : { name: option, value: option });
/**
 * Status: *In progress*.
 * Category: FormElements
 *
 * Improvements: Move to a generic dropdown component
 **/
const DropDownListWithLabel = ({ className, labelMode, disabled, visibleLabel, label, selectedOption, changeSelectedOption, options = [], ...rest }) => (
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
            }, {'dropdown-list-with-label__select--disabled': disabled})} 
            disabled={disabled}
            value={selectedOption}
            onChange={changeSelectedOption}
            aria-label={visibleLabel ? null : label}
            {...rest}>
            {normalizeOptions(options).map((option) =>
                <option className="dropdown-list-with-label__option" key={option.value} value={option.value}>
                    {option.name}
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
    options: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string
        })
    ])),
};

export default DropDownListWithLabel;