import React from 'react';
import classnames from 'classnames';

type Props = {
    kind?: 'fineprint' | 'preamble';
};

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
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const Paragraph = ({ children, className, kind, ...rest }: Props) => (
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

export default Paragraph;
