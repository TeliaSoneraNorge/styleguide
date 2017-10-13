import React from 'react';

function classNames(size) {
    const classNames = ['parallax-block__spacer'];
    if (size !== null) {
        classNames.push('parallax-block__spacer--' + size);
    }
    return classNames.join(' ');
}


const ParallaxBlockSpacer = ({ size, children }) =>
    <div className={classNames(size)}>
        {children}
    </div>;

export default ParallaxBlockSpacer;

