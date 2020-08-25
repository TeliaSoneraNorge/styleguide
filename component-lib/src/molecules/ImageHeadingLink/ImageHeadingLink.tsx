import React from 'react';
import classnames from 'classnames';

import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

type ImageHeadingLinkProps = {
    children?: React.ReactNode;
    src: string;
    alt?: string;
    href?: string;
    onClick?: (...args: any[]) => any;
};

/**
 * Status: *in progress*
 * Category: ImageAndVideo
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Image... Remove this comment to see the full error message
const ImageHeadingLink = ({ children, className, src, alt, ...rest }: ImageHeadingLinkProps) => (
  <a
    className={classnames('image-heading-link heading-link', {
      [className]: className,
    })}
    {...rest}
  >
    <img className="image-heading-link__image" src={src} alt={alt} />
    <div className="image-heading-link__box heading-link--focus-area">
      <h2 className="image-heading-link__heading">{children}</h2>
      <HorizontalRule short />
    </div>
  </a>
);
const Small = ({
  children,
  className,
  ...rest
}: any) => (
  <span
    className={classnames('image-heading-link__heading--small', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </span>
);
ImageHeadingLink.Small = Small;

export default ImageHeadingLink;
