import React from 'react';
import classnames from 'classnames';

type Props = {
    children: string;
};

/**
 * Status: *finished*
 * Category: Links
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const TelephoneNumberLink = ({ children, className, ...rest }: Props) => (
  <a
    href={`tel:${children.replace(/\s/g, '')}`}
    className={classnames('heading heading--level-2 telephone-number-link', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </a>
);

export default TelephoneNumberLink;
