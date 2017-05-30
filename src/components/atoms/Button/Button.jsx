import React from 'react';

/**
 * This is a Button. Use it when you want people to click it. HELLO?
 */
const Button = ({ text, kind = 'default', onClick }) =>
    <button className={`button button--${kind}`} onClick={onClick}>{text}</button>;

export default Button;
