import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 * 
 * Our links have _two visual means_ of being identified: an underline and bolder font.
 */
const Link = ({ className, text, href, icon, iconPosition }) =>
    <a
        className={classnames('link', {
            [`link--with-icon link--${icon}`]: icon,
            [`link--icon-${iconPosition}`]: icon && iconPosition,
            [className]: className
        })}
        href={href}
        target="_self">
        {text}
    </a>;

export default Link;