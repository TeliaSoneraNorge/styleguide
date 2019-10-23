import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Label from '../../atoms/Label';
import TextBox from '../../atoms/TextBox';
import TextBoxWithIcon from '../TextBoxWithIcon/TextBoxWithIcon';

/**
 * Status: *in progress*.
 * Category: FormElements
 **/
const TextBoxWithLabel = React.forwardRef(
    (
        {
            labelText,
            type,
            placeholder,
            hideLabel,
            errorMessage,
            disabled,
            withIcon,
            iconName,
            iconColor,
            iconIsButton,
            iconTitle,
            searchQueryValue,
            ...rest
        },
        ref
    ) => (
        <Label
            className={classnames('textbox-with-label', {
                'textbox-with-label--with-error': errorMessage
            })}
            isUsingGrayText={true}  >
            <span
                className={classnames('textbox-with-label__label-text', {
                    'sr-only': hideLabel
                })} >
                {labelText}
            </span>
            {withIcon ? (
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
                    iconTitle={iconTitle}
                    searchQueryValue={searchQueryValue}
                    {...rest} />
            ) : (
                <TextBox
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    error={!!errorMessage}
                    {...rest} />
            )}
            {errorMessage && <p className="input-error">{errorMessage}</p>}
        </Label>
    )
);

TextBoxWithLabel.defaultProps = {
    iconColor: 'black',
    placeholder: '',
    onChange: () => {}
};

TextBoxWithLabel.propTypes = {
    labelText: PropTypes.string,
    hideLabel: PropTypes.bool,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,

    withIcon: PropTypes.bool,
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconIsButton: PropTypes.bool,
    iconLabel: PropTypes.string,
    iconTitle: PropTypes.string,

    onChange: PropTypes.func
};

export default TextBoxWithLabel;
