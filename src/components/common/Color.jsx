import React from 'react';
import classnames from 'classnames'

 
const Color = ({ name, hex, textColor, priority }) =>
<div class="sg-color">
    <span class={classnames("sg-color__circle", 
        priority === "1" ? "sg-color__circle-large" : null, 
        priority === "2" ? "sg-color__circle-medium" : null)} 
        style={{ backgroundColor: hex }}></span>
    <p align="center">{name}</p>
    <p align="center">{hex}</p>
    <p class="sg-color__text-color-hint" style={{ backgroundColor: hex, color:textColor }} align="center">Use black text</p>
</div>

export default Color;