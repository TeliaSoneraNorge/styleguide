import React from 'react';

const classNames = (additionalClassName) =>
    ['focus-box', additionalClassName]
        .filter(cls => !!cls)
        .join(' ');

/**
 * Status: *in progress*.
 *
 * Future work: change the pebble-type in the border, and animate it.
 *
 * TODO: better documentation.
 *
 * The FocusBox should be used one per-page to highlight the main content on that page.
 */
const FocusBox = ({ className, children }) =>
    <div className={classNames(className)}>
        <div className="focus-box__content-outer">
            <section className="container container--small container--no-margin focus-box__content-inner">
                {children}
            </section>
        </div>
    </div>;

export default FocusBox;
