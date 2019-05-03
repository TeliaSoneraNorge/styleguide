import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Card = ({ title, link, isGrey, img, children }) => (
    <a className={ classnames('card link', {
        'card--background-grey' : isGrey
    })} href={link}>
        <img className="card__image" src={img.src} alt={img.alt} />
        <div className="card__content">
            <h2 className="heading heading--level-2">{title}</h2>
            <span className="card__horizontal-line"></span>
            {children}
        </div>
    </a>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isGrey: PropTypes.bool,
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    })
};

export default Card;