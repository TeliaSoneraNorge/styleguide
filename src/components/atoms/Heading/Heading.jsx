import React from 'react';

const levels = {
    '1': 'h1',
    '2': 'h2',
    '3': 'h3',
    '4': 'h4',
    '5': 'h5',
    '6': 'h6'
};

/**
 * This is a Heading, which renders the h1, h2, h3, etc. tags.
 */
const Heading = ({ text, level }) => {
    const tagName = levels[level.toString()];
    return React.createElement(tagName, { className: `heading heading--level-${level}` }, text);
};

export default Heading;
