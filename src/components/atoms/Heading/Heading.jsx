import React from 'react';

/**
 * Status: *in progress*.
 *
 * Work remaining: correct fonts, sizes & colors.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2, h3 and h4 headings have been defined.
 */
const Heading = ({ level, text }) => {
    const TagName = `h${level}`;
    return <TagName className={`heading heading--level-${level}`}>{text}</TagName>;
};

export default Heading;
