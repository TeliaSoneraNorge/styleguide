import React from 'react';

/**
 * Status: *finished*.
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 */
const Link = ({ text, href }) =>
    <a className="link" href={href} target="_self">
        {text}
    </a>;

export default Link;