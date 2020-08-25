import React from 'react';

type Props = {
    heading: string;
    items?: {
        image: string;
        alt: string;
    }[];
};

/**
 * Status: *delete from styleguide*.
 * Category: Lists
 */
const References = ({ items = [], heading }: Props) => (
  <section className="references container container--no-margin container--no-padding">
    <h2 className="heading heading--level-2 heading--pebble references__heading">{heading}</h2>
    <div className="references__items">
      {items.map(item => (
        <div key={item.alt} className="references__item">
          <img className="references__image" src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
  </section>
);

export default References;
