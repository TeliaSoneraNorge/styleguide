import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../../atoms/SvgIcon';
import TextBox from '../../atoms/TextBox';

/**
 * Status: *finished*.
**/
const TextBoxWithIcon = React.forwardRef(({ className, type, placeholder, disabled, error, iconName, iconColor, iconIsButton, iconLabel, ...rest }, ref) => (
    <div className="textbox-with-icon">
        <TextBox ref={ref} type={type} placeholder={placeholder} disabled={disabled} error={error} {...rest} />
        {iconIsButton ?
            <button className="textbox-with-icon__icon-wrapper textbox-with-icon__button">
                <SvgIcon className="textbox-with-icon__icon" iconName={iconName} color={iconColor} aria-label={iconLabel} />
            </button> :
            <span className="textbox-with-icon__icon-wrapper">
                <SvgIcon className="textbox-with-icon__icon" iconName={iconName} color={iconColor} aria-label={iconLabel} />
            </span>}
    </div>
));

TextBoxWithIcon.defaultProps = {
    iconColor: 'black',
    placeholder: '',
    onChange: () => {}
};

TextBoxWithIcon.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconIsButton: PropTypes.bool,
    iconLabel: PropTypes.string,

    className: PropTypes.string,
    onChange: PropTypes.func
};

export default TextBoxWithIcon;