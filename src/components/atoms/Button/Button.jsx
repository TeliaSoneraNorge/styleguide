import React from 'react';

/**
 * This is a Button. Use it when you want people to click it. HELLO?
 */
const Button = ({ size, text, kind = 'default', onClick }) =>
    <button className={`button button--${size} button--${kind}`} onClick={onClick}>{text}</button>;

export default Button;
