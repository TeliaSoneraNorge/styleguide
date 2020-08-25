import React from 'react';
import classnames from 'classnames';

import Caption from '../../atoms/Caption/Caption';
import uniqueId from 'lodash/uniqueId';

type Props = {
    withMask?: boolean;
    withContentOverlap?: boolean;
    src: string;
    alt?: string;
};

/**
 * Status: *finished*
 * Category: ImageAndVideo
 *
 * Recommendations from designers:
 * - Images in the size of 1440x440px or the same width/height format seems to be a good size to use in this component.
 * - Avoid using images that contains a lot of white color as this will blend in with the content and the user might not differ the picture from the rounded mask or the overlapping content.
 * - Images of nature and people are easier to match with this component than portrait images.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const FullWidthImage = ({ children, className, withMask, withContentOverlap, src, alt, logoSources, logoAlign, ...rest }: Props) => (
  <div
    className={classnames('full-width-image', {
      [className]: className,
      'full-width-image--with-mask': withMask,
      'full-width-image--with-content-overlap': withContentOverlap,
    })}
    {...rest}
  >
    <img className="full-width-image__image" src={src} alt={alt} />
    {logoSources && !!logoSources.length && (
      <picture className="full-width-image__logo">
        {logoSources.map((it: any) => <source
          key={uniqueId('source-')}
          srcSet={it.srcSet}
          media={it.type === 'mobile' ? '(max-width: 47.99em)' : '(min-width: 48em)'}
        />)}
        <img
          className={classnames('full-width-image__logo-image', {
            [`full-width-image__logo-image--align-${logoAlign || 'top-right'}`]: logoAlign,
          })}
          alt={alt}
        />
      </picture>
    )}
    {children && (
      <Caption className="container container--large container--no-padding container--no-margin">{children}</Caption>
    )}
  </div>
);

export default FullWidthImage;
