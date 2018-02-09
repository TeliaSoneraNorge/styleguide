import React from 'react';

function classNames(className, kind, size) {
    const classNames = ['button'];
    if (className) {
        classNames.push(className);
    }
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
const Button = ({ text, kind, size, onClick, className }) =>
    <button className={classNames(className, kind, size)} onClick={onClick}>{text}</button>;

export default Button;
