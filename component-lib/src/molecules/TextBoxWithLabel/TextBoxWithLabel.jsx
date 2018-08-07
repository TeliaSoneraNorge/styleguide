import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';
import StatefulTooltip from '../../molecules/Tooltip/StatefulTooltip';

/**
 * Status: *in progress*.
 *
 * Be sure to set the correct type when using this component as it helps
 * the user to give correct input.
 *
 **/
const TextBoxWithLabel = ({ labelText, type, placeholder, errorMessage, disabled, withIcon, iconSvg, tooltipText, ...rest }) =>
    <div className={classnames('textbox-with-label', {
        'textbox-with-label--with-error': errorMessage,
        'textbox-with-label--with-icon': withIcon
    })}>
        {tooltipText
            ? <StatefulTooltip
                label={<span className="textbox-with-label__label-text">{labelText}</span>}
                text={tooltipText}
                isUsingGrayText />
            : <Label isUsingGrayText>
                <span className="textbox-with-label__label-text">{labelText}</span>
            </Label>
        }
        {withIcon
            ? <div className="textbox-with-label__input-icon-wrapper">
                <input className="textbox-with-label__input" type={type} placeholder={placeholder} disabled={disabled} {...rest} />
                <button className="textbox-with-label__button">
                    <i className="textbox-with-label__icon" aria-label={labelText}>{iconSvg}</i>
                </button>
            </div>
            : <input className="textbox-with-label__input" type={type} placeholder={placeholder} disabled={disabled} {...rest} />
        }
        {errorMessage && <span className="input-error">{errorMessage}</span>}
    </div>;

TextBoxWithLabel.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.any,
    errorMessage: PropTypes.string,
    labelText: PropTypes.string,
    tooltipText: PropTypes.string,
};

export default TextBoxWithLabel;
