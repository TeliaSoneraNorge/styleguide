import React from 'react';

/**
 * Status: *in progress*.
 *
 * Future work: change the pebble-type in the border, and animate it.
 *
 * TODO: better documentation.
 *
 * The FocusBox should be used one per-page to highlight the main content on that page.
 */
const FocusBox = ({ children }) =>
    <div className="focus-box">
        <div className="focus-box__content-outer">
            <section className="focus-box__content-inner">
                {children}
            </section>
        </div>
    </div>;

export default FocusBox;
