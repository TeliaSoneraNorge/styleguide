import React from 'react';

/**
 * Status: *finished*.
 * <p>
 *   Use the CSS class <code>.page-pebbles</code> if you want pebbles as decoration on your page.
 *   This applies to devices wider than or equal to 900px.
 * </p>
 * <p>
 *   If you want another pattern of the pebbles, add a second class like this:
 *   <code>.page-pebbles .page-pebbles--variation-1</code>.
 *   There are five variation classes with numbers from 1-5 that you can choose between.
 * </p>
 * <p>
 *   The pebble decoration is safe to use- and will not overlap the page content when you have
 *   it wrapped inside <code>.body-text-container</code> or content is of similar or smaller width.
 * </p>
 */
const PagePebbles = () => (
    <div className="page-pebbles" />
);

export default PagePebbles;
