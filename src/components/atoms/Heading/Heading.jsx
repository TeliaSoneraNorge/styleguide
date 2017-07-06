import React from 'react';

/**
 * Status: *in progress*.
 *
 * Work remaining: correct fonts & colors.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2, h3 and h4 headings have been defined.
 */
const Heading = ({ children, level }) => {
    const TagName = `h${level}`;
    return <TagName className={`heading heading--level-${level}`}>{children}</TagName>;
};

export default Heading;
