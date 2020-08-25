import React from 'react';
import classnames from 'classnames';

type ListWithImageProps = {
    children?: React.ReactNode;
    heading?: string;
    src: string;
    alt: string;
    imagePosition?: 'top' | 'bottom';
    listPosition?: 'left' | 'right';
    hideImageForMobile?: boolean;
};

/**
 * Status: *finished*
 * Category: Lists
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'ListW... Remove this comment to see the full error message
const ListWithImage = ({ children, className, heading, src, alt, imagePosition = 'bottom', listPosition = 'left', hideImageForMobile, ...rest }: ListWithImageProps) => (
  <div
    className={classnames('list-with-image', {
      [className]: className,
      'list-with-image--image-top': imagePosition === 'top',
      'list-with-image--list-right': listPosition === 'right',
      'list-with-image--hide-image-for-mobile': hideImageForMobile,
    })}
    {...rest}
  >
    <h3 className="heading heading--level-3 list-with-image__heading">{heading}</h3>
    <ul className="list-with-image__list list">{children}</ul>
    <img className="list-with-image__image" src={src} alt={alt} />
  </div>
);

const Item = ({
  children,
  className,
  ...rest
}: any) => (
  <li
    className={classnames('list__item', {
      [className]: className,
    })}
    {...rest}
  >
    {children}
  </li>
);
ListWithImage.Item = Item;

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '({ ch... Remove this comment to see the full error message
ListWithImage.Item.propTypes = {};

export default ListWithImage;
