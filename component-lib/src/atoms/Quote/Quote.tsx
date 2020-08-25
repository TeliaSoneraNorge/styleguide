import React from 'react';
import classnames from 'classnames';

type Props = {
    inline?: boolean;
    children: string;
    source: string;
};

/**
 * Status: *finished*
 * Category: Style
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const Quote = ({ children, className, inline = false, source, ...rest }: Props) => (
  <blockquote
    className={classnames('quote', {
      [className]: className,
      ['quote--inline-right']: inline,
    })}
    {...rest}
  >
    <p className="quote__text">{children}</p>
    <span className="quote__source">{source}</span>
  </blockquote>
);

export default Quote;
