import React from 'react';

const Color = ({ name, hex, textColor }) =>
    <div className="sg-color" style={{ backgroundColor: hex, color: textColor }}>
        <div className="sg-color__name">{name}</div>
        <div className="sg-color__hex">{hex}</div>
    </div>;

export default Color;