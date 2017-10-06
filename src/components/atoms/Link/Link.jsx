import React from 'react';

/**
 * Status: *in progress*.
 *
 * Remaining work:
 *
 * - Handle target
 */
const Link = ({ text, href }) =>
    <a className="link" href={href}>
        {text}
    </a>;

export default Link;