import React, { ReactNode } from 'react';
import classnames from 'classnames';

export type ContainerSize = 'small' | 'medium' | 'large';

export interface Props {
  /**
   * Container size. Body text should be in a small container to reduce line width and make reading easier.
   */
  size?: ContainerSize;
  noMargin?: boolean;
  noPadding?: boolean;
  noPaddingTop?: boolean;
  extraPaddingTop?: boolean;
  extraMarginBottom?: boolean;
  whiteBg?: boolean;
  overlappingFullWidthImage?: boolean;
  children?: ReactNode;
}

type Props1 = {
    size?: 'small' | 'medium' | 'large';
    noMargin?: boolean;
    noPadding?: boolean;
    noPaddingTop?: boolean;
    extraPaddingTop?: boolean;
    extraMarginBottom?: boolean;
    whiteBg?: boolean;
    overlappingFullWidthImage?: boolean;
};

/**
 * Status: *in progress*
 * Category: Misc
 *
 * There are three main container widths: small, medium and large. Body text should be in a small container to reduce line width and make reading easier.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props1... Remove this comment to see the full error message
const Container: React.FC<Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ children, className, size, noMargin, noPadding, noPaddingTop, extraPaddingTop, extraMarginBottom, whiteBg, overlappingFullWidthImage, ...rest }: Props1) => (
  <div
    className={classnames('container', className, {
      [`container--${size}`]: size,
      'container--no-margin': noMargin,
      'container--no-padding': noPadding,
      'container--no-padding-top': noPaddingTop,
      'container--extra-padding-top': extraPaddingTop,
      'container--extra-margin-bottom': extraMarginBottom,
      'container--white-bg': whiteBg,
      'container--overlapping-full-width-image': overlappingFullWidthImage,
    })}
    {...rest}
  >
    {children}
  </div>
);

export default Container;
