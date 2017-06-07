import React from 'react';

const Color = ({ name, variableName, hexCode }) =>
    <div className="sg-color">
        <div className="sg-color__sample" style={{ backgroundColor: hexCode }}></div>
        <div className="sg-color__name">{name}</div>
        <div className="sg-color__variable">{variableName}</div>
    </div>;

export default Color;