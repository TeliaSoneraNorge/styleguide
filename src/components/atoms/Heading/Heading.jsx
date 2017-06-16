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
 * Status: *in progress*.
 *
 * Work remaining: correct fonts & colors.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2, h3 and h4 headings have been defined.
 */
const Heading = ({ text, level }) => {
    const tagName = levels[level.toString()];
    return React.createElement(tagName, { className: `heading heading--level-${level}` }, text);
};

export default Heading;
