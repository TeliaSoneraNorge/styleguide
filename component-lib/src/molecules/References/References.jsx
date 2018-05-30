import React from 'react';
import PropTypes from 'prop-types';

const References = ({ items, heading }) => (
    <section className="references container container--no-margin container--no-padding">
        <h2 className="heading heading--level-2 heading--pebble references__heading">{heading}</h2>
        <div className="references__items">
            {items.map((item, i) => (
                <div key={i} className="references__item">
                    <img className="references__image" src={item.image} alt={item.alt} />
                </div>
            ))}
        </div>
    </section>
);

References.propTypes = {
    heading: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default References;