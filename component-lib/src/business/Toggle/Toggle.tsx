import React, { useState, useRef } from 'react';
import cs from 'classnames';
// import './Toggle.scss';

const colors = {
    white: '#ffffff',
    greyDark: '#a0a0a0',
};

interface Props {
    checked: boolean;
    disabled?: boolean;
    'aria-labelledby'?: string;
    'aria-label'?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
}

const Toggle: React.FC<Props> = props => {
    const [focus, setFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
        if (props.onFocus) {
            props.onFocus(event);
        }
        setFocus(true);
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
        if (props.onBlur) {
            props.onBlur(event);
        }
        setFocus(false);
    }

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        if (inputRef && inputRef.current) {
            event.preventDefault();
            inputRef.current.focus();
            inputRef.current.click();
        }
    }

    function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
        if (inputRef && inputRef.current && event.keyCode === 32) {
            event.preventDefault();
            inputRef.current.focus();
            inputRef.current.click();
        }
    }

    return (
        <div
            className={cs(
                {
                    Toggle: true,
                    checked: props.checked,
                    focus: focus,
                    disabled: props.disabled,
                },
                props.className
            )}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            tabIndex={props.disabled ? -1 : 0}
        >
            <div className="Toggle-track">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 18 18">
                    <path
                        id="check"
                        d="M 2 13 L 9 13 L 9 2"
                        stroke={props.disabled && !props.checked ? colors.greyDark : colors.white}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fill="transparent"
                        transform="rotate(45 9 11)"
                        strokeWidth="3"
                    />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 32 32">
                    <path
                        fill={props.disabled ? colors.greyDark : colors.white}
                        d="M8.87 6.492L16 13.623l7.13-7.13a1.68 1.68 0 0 1 2.378 2.376L18.377 16l7.13 7.13a1.68 1.68 0 0 1-2.376 2.378L16 18.377l-7.13 7.13a1.68 1.68 0 0 1-2.378-2.376L13.623 16l-7.13-7.13a1.68 1.68 0 0 1 2.376-2.378z"
                        stroke={props.disabled && !props.checked ? colors.greyDark : colors.white}
                    />
                </svg>
            </div>
            <div className="Toggle-thumb" />

            <input
                {...props}
                onChange={props.onChange}
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="Toggle-screenreader-only"
                type="checkbox"
                tabIndex={-1}
            />
        </div>
    );
};

export default Toggle;
