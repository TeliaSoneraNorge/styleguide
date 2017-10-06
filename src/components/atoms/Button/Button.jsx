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
 * Status: *finished*.
 */
const Button = ({ text, kind, size, onClick }) =>
    <button className={classNames(kind, size)} onClick={onClick}>{text}</button>;

export default Button;
