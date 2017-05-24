import React from 'react';

/**
 * This is a Button. Use it when you want people to click it. HELLO?
 */
const Button = ({ text, onClick }) =>
    <button className="button" onClick={onClick}>{text}</button>;

export default Button;
