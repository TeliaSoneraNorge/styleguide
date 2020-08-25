import React from 'react';
import classnames from 'classnames';

type Props = {
    title: string;
};

/**
 * Status: *finished*
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const FocusHeader = ({ children, className, title, ...rest }: Props) => (
  <section
    className={classnames('focus-header', {
      [className]: className,
    })}
    {...rest}
  >
    <h3 className="focus-header__heading heading heading--level-3">{title}</h3>
    {children}
  </section>
);

export default FocusHeader;
