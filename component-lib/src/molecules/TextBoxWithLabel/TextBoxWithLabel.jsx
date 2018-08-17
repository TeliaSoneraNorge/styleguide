import React from 'react';
import classnames from 'classnames';
import Label from '../../atoms/Label/Label';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *in progress*.
 *
 * Be sure to set the correct type when using this component as it helps
 * the user to give correct input.
 *
**/
const TextBoxWithLabel = ({ labelText, type, placeholder, errorMessage, disabled, withIcon, iconName, ...rest }) =>
    <Label className={classnames('textbox-with-label', { 'textbox-with-label--with-error': errorMessage, 'textbox-with-label--with-icon': withIcon })} isUsingGrayText={true}>
        <span className="textbox-with-label__label-text">{labelText}</span>
        {withIcon
            ? <div className="textbox-with-label__input-icon-wrapper">
                <input className="textbox-with-label__input" type={type} placeholder={placeholder} disabled={disabled} {...rest} />
                <button className="textbox-with-label__button">
                    <SvgIcon className="textbox-with-label__icon" iconName={iconName} color="black" aria-label={labelText} />
                </button>
            </div>
            : <input className="textbox-with-label__input" type={type} placeholder={placeholder} disabled={disabled} {...rest} />
        }
        {errorMessage &&
            <span className="input-error">{errorMessage}</span>}
    </Label>;

export default TextBoxWithLabel;
