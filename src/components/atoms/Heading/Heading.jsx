import React from 'react';

function classNames(level, className) {
    const classNames = ['heading'];
    classNames.push(`heading--level-${level}`);

    if (className){
        classNames.push(className);
    }

    return classNames.join(' ');
}

/**
 * Status: *finished*.
 *
 * The Heading component should be used for page titles, sub-titles, etc.
 * Currently, only h1, h2, h3 and h4 headings have been defined.
 */
const Heading = ({ level, text, className }) => {
    const TagName = `h${level}`;
    return <TagName className={classNames(level, className)}>{text}</TagName>;
};

export default Heading;
