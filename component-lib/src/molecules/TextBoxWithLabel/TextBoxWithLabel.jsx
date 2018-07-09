import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Label from '../../atoms/Label/Label';
import StatefulTooltip from '../../molecules/Tooltip/StatefulTooltip';

/**
 * Status: *in progress*
 *
 * Be sure to set the correct type when using this component as it helps
 * the user to give correct input.
 *
 **/
const TextBoxWithLabel = ({ errorMessage, labelText, tooltipText, ...rest }) => {
    return (
        <div className={classnames('textbox-with-label', {
            'textbox-with-label--with-error': errorMessage
        })}>
            {tooltipText
                ? <StatefulTooltip
                    label={<span className="textbox-with-label__label-text">{labelText}</span>}
                    text={tooltipText}
                    isUsingGrayText />
                : <Label
                    tooltipText={tooltipText}
                    isUsingGrayText>
                    <span className="textbox-with-label__label-text">{labelText}</span>
                </Label>
            }

            <input className="textbox-with-label__input" {...rest} />
            {errorMessage && <span className="input-error">{errorMessage}</span>}
        </div>
    );
};

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
