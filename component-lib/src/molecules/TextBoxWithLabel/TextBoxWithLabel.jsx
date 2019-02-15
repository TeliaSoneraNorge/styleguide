import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label';
import TextBox from '../../atoms/TextBox';
import TextBoxWithIcon from '../TextBoxWithIcon/TextBoxWithIcon';

/**
 * Status: *in progress*.
**/
const TextBoxWithLabel = React.forwardRef(({ className, labelText, type, placeholder, errorMessage, disabled, iconName, iconColor, iconIsButton, ...rest }, ref) => (
    <Label className={classnames('textbox-with-label', { 'textbox-with-label--with-error': errorMessage })} isUsingGrayText={true}>
        <span className="textbox-with-label__label-text">{labelText}</span>
        {iconName ?
            <TextBoxWithIcon
                ref={ref}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                error={!!errorMessage}
                iconName={iconName}
                iconColor={iconColor}
                iconIsButton={iconIsButton}
                iconLabel={labelText}
                {...rest} /> :
            <TextBox
                ref={ref}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                error={!!errorMessage}
                {...rest} />
        }
        {errorMessage &&
            <span className="input-error">{errorMessage}</span>}
    </Label>
));

TextBoxWithLabel.defaultProps = {
    iconColor: 'black',
    placeholder: '',
    onChange: () => {}
};

TextBoxWithLabel.propTypes = {
    labelText: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,

    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconIsButton: PropTypes.bool,
    iconLabel: PropTypes.string,
    
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default TextBoxWithLabel;