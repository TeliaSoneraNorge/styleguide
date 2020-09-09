import React from 'react';
import classnames from 'classnames';

/**
 * Status: *in progress*.
 * Category: Style
 *
 * This is a component that is meant to be used as a container for text (headings, paragraphs etc.)
 * to give the text a certain layout with spacing between elements.
 *
 * Components like Heading should be kept as clean as possible so that they are easier to reuse in other components.
 * But still, we would like a way to make a page of textual elements
 * readable with the "correct amount" of spacing between headings, paragraphs etc. which is why we made this class.
 *
 */
const RichText = ({ className, children, ...rest }) => (
  <div
    className={classnames('rich-text', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </div>
);

export default RichText;
