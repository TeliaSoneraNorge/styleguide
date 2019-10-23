import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SvgIcon from '../../atoms/SvgIcon';
import TextBox from '../../atoms/TextBox';

const TextBoxIcon = ({ iconName, iconIsButton, iconColor, iconLabel, iconTitle }) => {
    if (!iconName) return null;

    if (iconIsButton) {
        return (
            <button className="textbox-with-icon__icon-wrapper textbox-with-icon__button button--stripped" title={iconTitle}>
                <SvgIcon className="textbox-with-icon__icon" iconName={iconName} color={iconColor} aria-label={iconLabel} />
            </button>
        );
    }

    return (
        <span className="textbox-with-icon__icon-wrapper">
            <SvgIcon className="textbox-with-icon__icon" iconName={iconName} color={iconColor} aria-label={iconLabel} />
        </span>
    );
};

/**
 * Status: *finished*.
 * Category: FormElements
**/
const TextBoxWithIcon = React.forwardRef(({ className, type, placeholder, disabled, error, small, iconName, iconColor, iconIsButton, iconLabel, iconTitle, searchQueryValue, ...rest }, ref) => (
    <div
        className={classnames('textbox-with-icon', {
            ['textbox-with-icon--small']: small,
            [className]: className
        })}>
        <TextBox ref={ref} type={type} placeholder={placeholder} disabled={disabled} error={error} small={small} searchQueryValue={searchQueryValue} {...rest} />
        <TextBoxIcon iconName={iconName} iconIsButton={iconIsButton} iconColor={iconColor} iconLabel={iconLabel} iconTitle={iconTitle} />
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
    small: PropTypes.bool,

    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconIsButton: PropTypes.bool,
    iconLabel: PropTypes.string,
    title: PropTypes.string,

    className: PropTypes.string,
    onChange: PropTypes.func
};

export default TextBoxWithIcon;