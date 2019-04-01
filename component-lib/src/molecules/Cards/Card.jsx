import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 */
const Card = ({ children, className, isGrey, img, title, link, ...rest }) => (
    <div className="card__wrapper">
        <a className={ classnames('card link', {
            'card--background-grey' : isGrey
        })} href={link}>
            <img className="card__image" src={img} />
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
    img: PropTypes.string
};

export default Card;