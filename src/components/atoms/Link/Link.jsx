import React from 'react';

function classNames(icon, modifier) {
    const classNames = ['link'];
    if (icon) {
        classNames.push(`link--with-icon`);
    }
    if (modifier) {
        classNames.push(`link--${modifier}`);
    }
    return classNames.join(' ');
}

/**
 * Status: *in progress*.
 *
 * Remaining work:
 *
 * - Add more variations
 * - Decide if icon in Link With Icon should be css `background-image` or `<img>` rather than `<svg>`
 * - Handle target
 */


const Link = ({ text, icon, modifier, href, target }) =>
    <a className={classNames(icon, modifier)} href={href}>
        {icon ? <svg role="img" className="link__icon">
            <use xlinkHref={`/public/icons/tc-svg-icons.svg#${icon}`}></use>
        </svg> : null}
        {text}
    </a>;

export default Link;