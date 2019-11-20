import React from 'react';
import classnames from 'classnames';

/**
 * Status: *in progress*.
 * Category: FocusBox
 *
 * Future work: change the pebble-type in the border, and animate it.
 *
 * TODO: better documentation.
 *
 * The FocusBox should be used one per-page to highlight the main content on that page.
 */
const FocusBox = ({ className, children }) => (
  <div
    className={classnames('focus-box', {
      [className]: className,
    })}
  >
    <div className="focus-box__content-outer">
      <section className="container container--small container--no-margin focus-box__content-inner">{children}</section>
    </div>
  </div>
);

export default FocusBox;
