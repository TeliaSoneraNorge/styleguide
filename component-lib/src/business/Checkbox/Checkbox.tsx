import React from 'react';
import cs from 'classnames';

import {Icon} from '../../atoms/Icon';

export const Checkbox: React.FC<any> = (props) => {
    return (
        <label className="checkbox">
            <span className={cs({
                "checkbox__label": true,
                "checkbox__label--hidden": props.hiddenLabel
            })}>{props.label}</span>
            <input
                id={props.id}
                aria-checked={props.checked ? "true" : props.mixed ? "mixed" : "false" }
                aria-controls={props.controls ? props.controls : ""}
                className="checkbox__checkbox"
                type="checkbox"
                name={props.name}
                checked={props.checked}
                disabled={props.disabled}
                onChange={() => props.disabled ? null : props.onChange()}/>
            <div className={cs({
                "checkbox__icon-container": true,
                "checkbox__icon-container--checked": props.mixed || props.checked,
                "checkbox__icon-container--disabled": props.disabled,
                "checkbox__icon-container--disabled-and-checked": props.disabled && (props.checked || props.mixed)
                })}>
                <Icon icon="check-mark" className={cs({"checkbox__icon": true, "checkbox__icon--visible": props.checked })} />
                <Icon icon="minus" className={cs({"checkbox__icon": true, "checkbox__icon--visible": !props.checked && props.mixed })} />
            </div>
        </label>
    )
}