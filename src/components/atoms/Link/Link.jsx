import React from 'react';

function classNames(type) {
    const classNames = ['link'];
   
    if (type){
        var className = 'link--' + type;
        classNames.push(className);
    }

    return classNames.join(' ');
}

/**
 * Status: *finished*.
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 */
const Link = ({ text, href, type }) =>
    <a className={classNames(type)} href={href} target="_self">
        {text}
    </a>;

export default Link;