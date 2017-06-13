import React from 'react';

function classNames(kind, size) {
    const classNames = ['button'];
    if (kind) {
        classNames.push(`button--${kind}`);
    }
    if (size) {
        classNames.push(`button--${size}`);
    }
    return classNames.join(' ');
}

/**
 * This is a Button. Use it when you want people to click it.
 */
const Button = ({ text, kind, size, onClick }) =>
    <button className={classNames(kind, size)} onClick={onClick}>{text}</button>;

export default Button;
