import React from 'react';

/**
 * Status: *in progress*.
 *
 * Work remaining: a designer should take a look at these heading levels and adjust fonts, sizes & colors.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2 and h3 headings have been defined.
 */
const Heading = ({ level, text }) => {
    const TagName = `h${level}`;
    return <TagName className={`heading heading--level-${level}`}>{text}</TagName>;
};

export default Heading;
