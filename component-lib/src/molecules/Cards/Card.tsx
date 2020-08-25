import React from 'react';
import classnames from 'classnames';

type Props = {
    title: string;
    link: string;
    isGrey?: boolean;
    img?: {
        src: string;
        alt: string;
    };
};

/**
 * Status: *finished*.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const Card = ({ title, link, isGrey, img, children }: Props) => (
  <a
    className={classnames('card link', {
      'card--background-grey': isGrey,
    })}
    href={link}
  >
    {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
    <img className="card__image" src={img.src} alt={img.alt} />
    <div className="card__content">
      <h2 className="heading heading--level-2">{title}</h2>
      <span className="card__horizontal-line"></span>
      {children}
    </div>
  </a>
);

export default Card;
