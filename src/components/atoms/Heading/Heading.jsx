import React from 'react';

function classNames(level, className) {
    const classNames = ['heading'];
    classNames.push(`heading--level-${level}`);

    if(className){
        classNames.push(className);
    }

    return classNames.join(' ');
}

/**
 * Status: *in progress*.
 *
 * Work remaining: a designer should take a look at these heading levels and adjust fonts, sizes & colors.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2 and h3 headings have been defined.
 */
const Heading = ({ level, text, className }) => {
    const TagName = `h${level}`;
    return <TagName className={classNames(level, className)}>{text}</TagName>;
};

export default Heading;
