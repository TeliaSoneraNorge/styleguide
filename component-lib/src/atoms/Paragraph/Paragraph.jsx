import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *in progress*.
 * Category: Style
 *
 * Work remaining:
 *
 * - Consider doing some basic styling for `<p>` on a global level. Current implementation requires class .paragraph to get any styling.
 * - Consider if max-width (for readability) should be implemented on the paragraph or in the context
 * - There may be a need for more variations
 */
const Paragraph = ({ children, className, kind, ...rest }) => (
  <p
    className={classnames('paragraph', {
      [className]: className,
      [`paragraph--${kind}`]: kind,
    })}
    {...rest}
  >
    {children}
  </p>
);

Paragraph.propTypes = {
  /** One of 'fineprint' or 'preamble'. */
  kind: PropTypes.oneOf(['fineprint', 'preamble']),
};

export default Paragraph;
