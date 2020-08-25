import React from 'react';
import classnames from 'classnames';

type Props = {
    inline?: 'left' | 'right';
};

/**
 * Status: *finished*
 * Category: ImageAndVideo
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const Image = ({ children, className, src, alt, inline, ...rest }: Props) => (
  <figure
    className={classnames('image', {
      [className]: className,
      [`image--inline-${inline}`]: inline,
    })}
  >
    <img className="image__img" src={src} alt={alt} {...rest} />
    {children}
  </figure>
);

export default Image;
