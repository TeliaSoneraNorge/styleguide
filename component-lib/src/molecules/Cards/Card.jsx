import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Card = ({ children, isGrey, img, alt, title, link }) => (
    <div className="card__wrapper">
        <a className={ classnames('card link', {
            'card--background-grey' : isGrey
        })} href={link}>
            <img className="card__image" src={img} alt={alt} />
            <div className="card__content">
                <h2 className="heading heading--level-2">{title}</h2>
                <span className="card__horizontal-line"></span>
                {children}
            </div>
        </a>
    </div>
);

Card.propTypes = {
    title: PropTypes.string,
    isGrey: PropTypes.bool,
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string
};

export default Card;